import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  SimpleChanges,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { ResizeObserver } from '@juggle/resize-observer';
import { SMWebSDKService } from '../services/smwebsdk.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [SMWebSDKService],
})
export class VideoComponent implements OnChanges, AfterViewInit, OnDestroy {
  private resizeObserver: ResizeObserver;

  // required inputs
  @Input() public tokenserver: string;

  // optional inputs
  @Input() public autoconnect: boolean = false;
  @Input() public debug: string = 'true';

  // outputs, exposed as publicly consumable events
  @Output('connect')
  public connectEvent = new EventEmitter<CustomEvent>();

  @Output('disconnect')
  public disconnectEvent = new EventEmitter<CustomEvent>();

  @Output('speechmarker')
  public speechmarkerEvent = new EventEmitter<CustomEvent>();

  @Output('conversationResult')
  public conversationResultEvent = new EventEmitter<CustomEvent>();

  // elements
  @ViewChild('video', { static: false }) videoRef: ElementRef;

  constructor(private hostRef: ElementRef, public webSDKService: SMWebSDKService) {
    this.log(`video constructor: token server - ${this.tokenserver}`);

    //publicly accessible functions
    this.hostRef.nativeElement.disconnect = () => this.webSDKService?.disconnect();
    this.hostRef.nativeElement.setMicrophoneEnabled = (value: boolean) =>
      this.webSDKService.setMicrophoneEnabled(value);
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.log({ changes });
    this.connect();
  }

  public connect() {
    if (this.tokenserver && this.autoconnect) {
      this.webSDKService
        .connect(this.tokenserver)
        .pipe(
          tap(() => this.onConnectionSuccess()),
          catchError((e) => {
            this.onConnectionError(e);
            return of(false);
          }),
        )
        .subscribe();
    }
  }

  public ngAfterViewInit() {
    this.initHostResizeWatcher();
  }

  public ngOnDestroy() {
    this.webSDKService.personaVideoStream = null;
    this.resizeObserver.unobserve(this.hostRef.nativeElement);
    this.webSDKService.disconnect();
  }

  private onConnectionSuccess() {
    this.log(`session connected.`);
    this.resizeVideoStream();
  }

  private onConnectionError(error: any) {
    this.log(`session connection failed, error: ${error}`);
  }

  private onDisconnected(event: any) {
    this.disconnectEvent.emit(event.detail);
  }

  private initHostResizeWatcher() {
    this.resizeObserver = new ResizeObserver(() => this.resizeVideoStream());
    this.resizeObserver.observe(this.hostRef.nativeElement);
  }

  private resizeVideoStream() {
    if (this.webSDKService?.connected) {
      const element = this.hostRef.nativeElement;
      const [width, height] = [element.clientWidth, element.clientHeight];
      this.webSDKService.sendVideoBounds(width, height);
    }
  }

  private log(...args) {
    if (this.debug === 'true') {
      console.log(...args);
    }
  }
}

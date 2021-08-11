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
  @ViewChild('video', { static: false }) videoRef: ElementRef;

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

  public get personaVideoStream() {
    return this.videoRef?.nativeElement.srcObject;
  }

  private get isDebug() {
    return this.debug === 'true';
  }

  private get nativeElement() {
    return this.hostRef.nativeElement;
  }

  private resizeObserver: ResizeObserver;

  private publicMethods: [string, Function][] = [
    ['persona', this.getPersona],
    ['scene', this.getScene],
    ['connect', this.connect],
    ['disconnect', this.disconnect],
    ['sendTextMessage', this.sendTextMessage],
    ['setMicrophoneEnabled', this.setMicrophoneEnabled],
    ['stopSpeaking', this.stopSpeaking],
  ];

  constructor(private hostRef: ElementRef, public webSDKService: SMWebSDKService) {
    this.log(`video constructor: token server - ${this.tokenserver}`);

    this.bindPublicMethods();
  }

  private bindPublicMethods() {
    this.publicMethods.map(
      ([name, implementation]) => (this.nativeElement[name] = implementation.bind(this)),
    );
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.log('changes: ', { changes });
  }

  public connect() {
    this.log('connect');

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

  public disconnect() {
    this.log('disconnect');
    this.webSDKService?.disconnect();
  }

  public ngAfterViewInit() {
    this.webSDKService.initialise(this.videoRef.nativeElement);
    if (this.autoconnect) {
      this.connect();
    }
    this.initHostResizeWatcher();
  }

  public ngOnDestroy() {
    this.resizeObserver.unobserve(this.nativeElement);
    this.webSDKService.disconnect();
  }

  private onConnectionSuccess() {
    this.log(`session connected.`);

    this.resizeVideoStream();
  }

  private onConnectionError(error: any) {
    this.log(`session connection failed, error: ${error}`);
  }

  //TODO: need to monitor scene disconnect event
  private onDisconnected(event: any) {
    this.disconnectEvent.emit(event.detail);
  }

  public sendTextMessage(text: string) {
    this.log('sendTextMessage: ', text);
    this.webSDKService.persona.conversationSend(text, {}, {});
  }

  public setMicrophoneEnabled(enabled: boolean) {
    this.log('setMicrophoneEnabled ', enabled);

    if (enabled) {
      this.webSDKService.scene?.startRecognize();
    } else {
      this.webSDKService.scene?.stopRecognize();
    }
  }

  public stopSpeaking() {
    this.log('stopSpeaking');
    this.webSDKService.persona.stopSpeaking();
  }

  public getPersona() {
    return this.webSDKService.persona;
  }

  public getScene() {
    return this.webSDKService.scene;
  }

  private initHostResizeWatcher() {
    this.resizeObserver = new ResizeObserver(() => this.resizeVideoStream());
    this.resizeObserver.observe(this.nativeElement);
  }

  private resizeVideoStream() {
    if (this.webSDKService?.connected) {
      const element = this.hostRef.nativeElement;
      const [width, height] = [element.clientWidth, element.clientHeight];
      this.webSDKService.sendVideoBounds(width, height);
    }
  }

  private log(...args: any[]) {
    if (this.isDebug) {
      console.log(...args);
    }
  }
}

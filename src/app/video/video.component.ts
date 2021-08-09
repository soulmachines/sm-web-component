import { HttpClient } from '@angular/common/http';
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
import { tap } from 'rxjs/operators';
import { SoulMachinesConfig } from './soulmachines-config';
import { ResizeObserver } from '@juggle/resize-observer';
import { Scene, Persona } from '@soulmachines/smwebsdk';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnChanges, AfterViewInit, OnDestroy {
  private resizeObserver: ResizeObserver;
  private persona: Persona;
  private scene: Scene;

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

  constructor(private http: HttpClient, private hostRef: ElementRef) {
    this.log('video: constructor', this.tokenserver);

    // publicly accessible functions
    this.hostRef.nativeElement.disconnect = () => this.disconnect();
    this.hostRef.nativeElement.setMicrophoneEnabled = (value: boolean) =>
      this.setMicrophoneEnabled(value);
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.log({ changes });
    if (this.tokenserver && this.autoconnect) {
      this.connect();
    }
  }

  public ngAfterViewInit() {
    this.initHostResizeWatcher();
  }

  public ngOnDestroy() {
    this.resizeObserver.unobserve(this.hostRef.nativeElement);
    this.scene?.onStateEvent.removeListener(this.onState);
    this.scene?.onDisconnectedEvent.removeListener(this.onDisconnected);
  }

  public connect() {
    this.http
      .get<SoulMachinesConfig>(this.tokenserver)
      .pipe(tap((config) => this.initialiseScene(config)))
      .subscribe();
  }

  private async initialiseScene(config: SoulMachinesConfig): Promise<any> {
    if (!this.videoRef) {
      return;
    }

    this.scene = new Scene(this.videoRef.nativeElement as HTMLElement);
    const retryOptions = {
      maxRetries: 20,
      delayMs: 500,
    };
    await this.scene.connect(config.url, '', config.jwt, retryOptions);
    this.persona = new Persona(this.scene, 1);

    //state messageBody type is StateResponseBody in smwebsdk, but not exposed publicly.
    //listen and log the state message is for dev process, not sure if it should be exposed outside of sm.
    this.scene.onStateEvent.addListener(this.onState);
    this.scene.onDisconnectedEvent.addListener(this.onDisconnected);

    this.resizeVideoStream();
  }

  private onState(_: Scene, messageBody: any) {
    if (messageBody.persona) {
      const data = messageBody.persona[1];
      console.log('STATE: ', data);
    }
  }

  private onDisconnected(event: any) {
    this.disconnectEvent.emit(event.detail);
  }

  public disconnect() {
    this.scene?.disconnect();
  }

  public isConnected(): boolean {
    return Boolean(this.scene?.isConnected());
  }

  public setMicrophoneEnabled(enabled: boolean) {
    if (enabled) {
      this.scene.startRecognize();
    } else {
      this.scene.stopRecognize();
    }
  }

  private initHostResizeWatcher() {
    this.resizeObserver = new ResizeObserver(() => this.resizeVideoStream());
    this.resizeObserver.observe(this.hostRef.nativeElement);
  }

  private resizeVideoStream() {
    if (this.scene?.isConnected()) {
      const element = this.hostRef.nativeElement;
      const [width, height] = [element.clientWidth, element.height];
      this.scene.sendVideoBounds(width, height);
    }
  }

  private log(...args) {
    if (this.debug === 'true') {
      console.log(...args);
    }
  }
}

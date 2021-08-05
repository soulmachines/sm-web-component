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
import { PersonaResponseEvent } from './persona-response-event';

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

  @Output('personaResponse')
  public personaResponseEvent = new EventEmitter<PersonaResponseEvent>();

  // elements
  @ViewChild('video', { static: false }) videoRef: ElementRef;

  constructor(private http: HttpClient, private hostRef: ElementRef) {
    this.log('video: constructor', this.tokenserver);

    // publicly accessible functions
    this.hostRef.nativeElement.disconnect = () => this.disconnect();
    this.hostRef.nativeElement.setMicrophoneEnabled = (value: boolean) =>
      this.setMicrophoneEnabled(value);

    // // mapping internal events to external events
    // this.sm.addEventListener(RtcEventName.Connected, (e) => {
    //   this.onConnect();
    //   this.connectEvent.emit(e.detail);
    // });

    // this.sm.addEventListener(RtcEventName.Close, (e) => this.disconnectEvent.emit(e.detail));

    // this.sm.addEventListener(SceneEventType.ConversationResult, (e) =>
    //   this.conversationResultEvent.emit(e.detail),
    // );

    // this.sm.addEventListener(SceneEventType.PersonaResponse, (e) =>
    //   this.personaResponseEvent.emit(e.detail),
    // );
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.log({ changes });
    if (this.tokenserver && this.autoconnect) {
      this.connect();
    }
  }

  public ngAfterViewInit() {
    this.initHostResizeWatcher();
    // this.initVideoStartedListener();
  }

  public ngOnDestroy() {
    this.resizeObserver.unobserve(this.hostRef.nativeElement);
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

    this.scene.onStateEvent.addListener((scene: Scene, messageBody: any) => {
      this.onState(messageBody);
    });

    this.scene.onDisconnectedEvent.addListener((event) => {
      this.disconnectEvent.emit(event.detail);
    });

    this.resizeVideoStream();
  }

  private onState(messageBody: any): void {
    if (messageBody.persona) {
      let data = messageBody.persona[1];
      console.log(data);
    }
  }

  public disconnect() {
    if (this.scene) {
      this.scene.disconnect();
    }
  }

  public isConnected(): boolean {
    if (this.scene) {
      return this.scene.isConnected();
    }
    return false;
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
    if (this.scene && this.scene.isConnected()) {
      const element = this.hostRef.nativeElement;
      const width = element.clientWidth;
      const height = element.clientHeight;
      this.scene.sendVideoBounds(width, height);
    }
  }

  private log(...args) {
    if (this.debug === 'true') {
      console.log(...args);
    }
  }
}

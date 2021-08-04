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
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SoulMachines } from '../data/soulmachines';
import { SoulMachinesConfig } from '../data/soulmachines-config';
import { ResizeObserver } from '@juggle/resize-observer';
import { RtcEventName } from '../data/webrtc/events/rtc-event-name.enum';
import { SceneEventType } from '../data/scene/events/scene-event-type.enum';
import { PersonaResponseEvent } from '../data/scene/events/persona-response-event';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnChanges, AfterViewInit, OnDestroy {
  private resizeObserver: ResizeObserver;

  public localStream$: Observable<MediaStream>;
  public remoteStream$: Observable<MediaStream>;

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

  constructor(public sm: SoulMachines, private http: HttpClient, private hostRef: ElementRef) {
    this.log('widget: constructor', this.tokenserver);

    // publicly accessible functions
    this.hostRef.nativeElement.disconnect = () => this.disconnect();
    this.hostRef.nativeElement.setMicrophoneEnabled = (value: boolean) =>
      this.setMicrophoneEnabled(value);

    // mapping internal events to external events
    this.sm.addEventListener(RtcEventName.Connected, (e) => {
      this.onConnect();
      this.connectEvent.emit(e.detail);
    });

    this.sm.addEventListener(RtcEventName.Close, (e) => this.disconnectEvent.emit(e.detail));

    this.sm.addEventListener(SceneEventType.ConversationResult, (e) =>
      this.conversationResultEvent.emit(e.detail),
    );

    this.sm.addEventListener(SceneEventType.PersonaResponse, (e) =>
      this.personaResponseEvent.emit(e.detail),
    );
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
      .pipe(tap((config) => this.sm.connect(config)))
      .subscribe();
  }

  public disconnect() {
    this.sm.session.close();
  }

  public setMicrophoneEnabled(enabled: boolean) {
    if (enabled) {
      this.sm.scene.startRecognize();
    } else {
      this.sm.scene.stopRecognize();
    }
  }

  private initHostResizeWatcher() {
    this.resizeObserver = new ResizeObserver(() => this.resizeVideoStream());
    this.resizeObserver.observe(this.hostRef.nativeElement);
  }

  private resizeVideoStream() {
    if (!this.sm.webrtc) {
      return;
    }

    const element = this.hostRef.nativeElement;
    const width = element.clientWidth;
    const height = element.clientHeight;

    this.sm.webrtc.sendVideoBounds(width, height);
  }

  private onConnect() {
    this.resizeVideoStream();
  }

  private log(...args) {
    if (this.debug === 'true') {
      console.log(...args);
    }
  }
}

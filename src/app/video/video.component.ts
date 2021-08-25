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
import { SceneCallbacks } from '../models/utilities';
import { Scene } from '@soulmachines/smwebsdk';

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
  @Input() public autoconnect = false;

  private _microphoneEnabled = true;
  @Input('microphone-enabled')
  public set microphoneEnabled(enabled: string) {
    // store value for use in onConnectionSuccess - as it will
    // fail when the component is initialised and the SDK has not being connected
    this._microphoneEnabled = enabled === 'true';
    // otherwise for subsequent value changes, call through to SDK
    if (this.webSDKService.connected) {
      this.setMicrophoneEnabled(this._microphoneEnabled);
    }
  }

  @Input() public debug: string = 'true';

  // outputs, exposed as publicly consumable events
  @Output('connect')
  public connectEvent = new EventEmitter();

  @Output('disconnect')
  public disconnectEvent = new EventEmitter();

  @Output('userSpoke')
  public userSpokeEvent = new EventEmitter<string>();

  @Output('dpSpoke')
  public dpSpokeEvent = new EventEmitter<string>();

  @Output('speechmarker')
  public speechmarkerEvent = new EventEmitter<CustomEvent>();

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

  private sceneCallbacks: SceneCallbacks = {
    onConversationResult: this.onConversationResult,
    onRecognizeResult: this.onRecognizeResult,
    onUserText: this.onUserText,
    onSpeechMarker: this.onSpeechMarker,
  };

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
    this.onDisconnected('User End.');
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
    this.webSDKService.unregisterEventsCallbacks(this.sceneCallbacks);
  }

  private executeCommand(command: () => any, ...logMessage: any[]) {
    if (this.webSDKService.connected) {
      this.log(...logMessage);
      return command();
    } else {
      console.log('Could not execute command as you are not connected:');
      console.log(...logMessage);
    }
  }

  public sendTextMessage(text: string) {
    return this.executeCommand(
      () => this.webSDKService.persona.conversationSend(text, {}, {}),
      'sendTextMessage: ',
      text,
    );
  }

  public setMicrophoneEnabled(enabled: boolean) {
    return this.executeCommand(
      () => {
        if (enabled) {
          this.webSDKService.scene?.startRecognize();
        } else {
          this.webSDKService.scene?.stopRecognize();
        }
      },
      'setMicrophoneEnabled ',
      enabled,
    );
  }

  public stopSpeaking() {
    return this.executeCommand(() => this.webSDKService.persona.stopSpeaking(), 'stopSpeaking');
  }

  public getPersona() {
    return this.executeCommand(() => this.webSDKService.persona, 'getPersona');
  }

  public getScene() {
    return this.executeCommand(() => this.webSDKService.scene, 'getScene');
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
    if (this.isDebug && args) {
      console.log(...args);
    }
  }

  private onConnectionSuccess() {
    this.log(`session connected.`);
    this.resizeVideoStream();
    this.webSDKService.registerEventsCallbacks(this.sceneCallbacks);
    this.connectEvent.emit();
  }

  private onConnectionError(error: any) {
    this.log(`session connection failed, error: ${error}`);
  }

  private onDisconnected(reason: string) {
    console.log('EVENTS - onDisconnected: ', reason);
    this.disconnectEvent.emit();
  }

  private onRecognizeResult(_: Scene, event: any) {
    console.log('EVENTS - onRecognizeResult: ', event);

    this.userSpokeEvent.emit('text');
  }

  private onUserText(_: Scene, event: any) {
    console.log('EVENTS - onUserText: ', event);
  }

  private onConversationResult(_: Scene, event: any) {
    console.log('EVENTS - onConversationResult: ', event);

    this.dpSpokeEvent.emit('output');
  }

  private onSpeechMarker(_: Scene, event: any) {
    console.log('EVENTS - onSpeechMarker: ', event);
  }
}

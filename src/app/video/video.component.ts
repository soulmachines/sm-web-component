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
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { ResizeObserver } from '@juggle/resize-observer';
import {
  SMWebSDKService,
  Persona,
  SceneCallbacks,
  SpeechMarkerEventArgs,
} from '../services/smwebsdk.service';
import { BehaviorSubject, of } from 'rxjs';
import { convertToBool, convertToBoolString, boolstring } from '../types/boolstring.type';
import { Theme, themes } from '../types/theme.type';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [SMWebSDKService],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class VideoComponent implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('video', { static: true }) videoRef: ElementRef;

  @Input('token-server') public tokenServer: string;

  @HostBinding('attr.theme')
  private _theme: Theme = 'default';

  @Input()
  public set theme(name: Theme) {
    this._theme = themes.includes(name) ? name : 'default';
  }
  public get theme() {
    return this._theme;
  }

  private _autoConnect = true;
  @Input('auto-connect')
  public set autoConnect(enabled: boolstring) {
    this._autoConnect = convertToBool(enabled);
  }
  public get autoConnect() {
    return convertToBoolString(this._autoConnect);
  }

  private _microphoneEnabled = true;
  @Input('microphone-enabled')
  public set microphoneEnabled(enabled: boolstring) {
    // store value for use in onConnectionSuccess - as it will
    // fail when the component is initialised and the SDK has not being connected
    this._microphoneEnabled = convertToBool(enabled);
    // otherwise for subsequent value changes, call through to SDK
    if (this.webSDKService.connected) {
      this.setMicrophoneEnabled(this._microphoneEnabled);
    }
  }
  public get microphoneEnabled() {
    return convertToBoolString(this._microphoneEnabled);
  }

  private _debug = false;
  @Input() public set debug(enabled: boolstring) {
    this._debug = convertToBool(enabled);
  }
  public get debug() {
    return convertToBoolString(this._debug);
  }

  // outputs, exposed as publicly consumable events
  @Output()
  public connected = new EventEmitter();

  @Output()
  public disconnected = new EventEmitter();

  @Output()
  public userSpoke = new EventEmitter<string>();

  @Output()
  public dpSpoke = new EventEmitter<string>();

  @Output()
  public speechMarker = new EventEmitter<SpeechMarkerEventArgs>();

  public get personaVideoStream() {
    return this.videoRef.nativeElement.srcObject;
  }

  private get nativeElement() {
    return this.hostRef.nativeElement;
  }

  public connectingSubject = new BehaviorSubject<boolean>(false);
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
    this.log(`video constructor: token server - ${this.tokenServer}`);
    this.bindPublicMethods();
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.log('changes: ', { changes });
  }

  public ngAfterViewInit() {
    this.webSDKService.initialise(this.videoRef.nativeElement);
    if (this._autoConnect) {
      this.connect();
    }
    this.initHostResizeWatcher();
  }

  public ngOnDestroy() {
    this.resizeObserver.unobserve(this.nativeElement);
    this.disconnect();
  }

  private connect() {
    this.log('connect');

    this.connectingSubject.next(true);

    this.webSDKService
      .connect(this.tokenServer)
      .pipe(
        tap(() => this.onConnectionSuccess()),
        catchError((e) => {
          this.onConnectionError(e);
          return of(false);
        }),
      )
      .subscribe();
  }

  private disconnect() {
    this.log('disconnect');
    this.webSDKService?.disconnect();
    this.onDisconnected();
    this.webSDKService.unregisterEventCallbacks(this.sceneCallbacks);
  }

  private sendTextMessage(text: string) {
    return this.executeCommand(
      () => this.webSDKService.persona.conversationSend(text, {}, {}),
      'sendTextMessage: ',
      text,
    );
  }

  private setMicrophoneEnabled(enabled: boolean) {
    return this.executeCommand(
      () =>
        enabled
          ? this.webSDKService.scene?.startRecognize()
          : this.webSDKService.scene?.stopRecognize(),
      'setMicrophoneEnabled ',
      enabled,
    );
  }

  private stopSpeaking() {
    return this.executeCommand(() => this.webSDKService.persona.stopSpeaking(), 'stopSpeaking');
  }

  private getPersona() {
    return this.executeCommand(() => this.webSDKService.persona, 'getPersona');
  }

  private getScene() {
    return this.executeCommand(() => this.webSDKService.scene, 'getScene');
  }

  private bindPublicMethods() {
    this.publicMethods.map(
      ([name, implementation]) => (this.nativeElement[name] = implementation.bind(this)),
    );
  }

  private executeCommand<R>(command: () => R, ...logMessage: any[]) {
    if (this.webSDKService.connected) {
      this.log(...logMessage);
      return command();
    } else {
      console.log('Could not execute command as you are not connected:');
      console.log(...logMessage);
    }
  }

  private initHostResizeWatcher() {
    this.resizeObserver = new ResizeObserver(() => this.resizeVideoStream());
    this.resizeObserver.observe(this.nativeElement);
  }

  private resizeVideoStream() {
    if (this.webSDKService?.connected) {
      const element = this.nativeElement;
      const [width, height] = [element.clientWidth, element.clientHeight];
      this.webSDKService.sendVideoBounds(width, height);
    }
  }

  private log(...args: any[]) {
    if (this._debug) {
      console.log(...args);
    }
  }

  private onConnectionSuccess() {
    this.log(`session connected.`);
    this.resizeVideoStream();
    this.webSDKService.registerEventCallbacks(this.sceneCallbacks);
    this.setMicrophoneEnabled(this._microphoneEnabled);
    this.connectingSubject.next(false);
    this.connected.emit();
  }

  private onConnectionError(error: any) {
    this.connectingSubject.next(false);
    this.log(`session connection failed, error: ${error}`);
  }

  private onDisconnected = () => {
    console.log('EVENTS - onDisconnected');
    this.disconnected.emit();
  };

  private onConversationResult = (_: Persona, data: any) => {
    console.log('EVENTS - onConversationResult: ', data);
    const input = data.input.text as string;
    const output = data.output.text as string;
    console.log(`input: ${input}`);
    console.log(`output: ${output}`);

    this.userSpoke.emit(input);
    this.dpSpoke.emit(output);
  };

  private onSpeechMarker = (_: Persona, data: any) => {
    console.log('EVENTS - onSpeechMarker: ', data);
    const speechMarkerData = {
      name: data.name,
      arguments: data.arguments,
    };
    this.speechMarker.emit(speechMarkerData);
  };

  private sceneCallbacks: SceneCallbacks = {
    onConversationResult: this.onConversationResult,
    onSpeechMarker: this.onSpeechMarker,
  };
}

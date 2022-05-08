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
import { of } from 'rxjs';
import { convertToBool, convertToBoolString, boolstring } from '../types/boolstring.type';
import { Theme, themes } from '../types/theme.type';
import { ConnectOptions, SceneOptions } from '@soulmachines/smwebsdk';

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
  @Input('api-key') public apiKey: string;

  @HostBinding('attr.theme')
  private _theme: Theme = 'default';

  @Input()
  public set theme(name: Theme) {
    this._theme = themes.includes(name) ? name : 'default';
  }
  public get theme() {
    return this._theme;
  }

  private _autoConnect = false;
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

  private get nativeElement() {
    return this.hostRef.nativeElement;
  }

  @HostBinding('class.connected')
  public isConnected = false;

  private resizeObserver: ResizeObserver;

  private publicMethods: [string, Function][] = [
    ['persona', this.getPersona],
    ['scene', this.getScene],
    ['connect', this.connect],
    ['disconnect', this.disconnect],
    ['sendTextMessage', this.sendTextMessage],
    ['setMicrophoneEnabled', this.setMicrophoneEnabled],
    ['setCameraEnabled', this.setCameraEnabled],
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
    const sceneOptions: SceneOptions = {
      videoElement: this.videoRef.nativeElement,
      apiKey: this.apiKey,
      requestedMediaDevices: { microphone: false, camera: false },
      requiredMediaDevices: { microphone: false, camera: false },
    };

    this.webSDKService.initialise(sceneOptions);
    if (this._autoConnect) {
      this.connect();
    }
    this.initHostResizeWatcher();
  }

  public ngOnDestroy() {
    this.resizeObserver.unobserve(this.nativeElement);
    this.disconnect();
  }

  public connect() {
    this.log('connect');

    const connectOptions: ConnectOptions = {};

    this.webSDKService
      .connect(connectOptions, this.tokenServer)
      .pipe(
        tap(() => this.onConnectionSuccess()),
        catchError((e) => {
          this.onConnectionError(e);
          return of(false);
        }),
      )
      .subscribe();

    // Having this here, rather than in onConnectionSuccess fixes a bug in some Safari devices
    // Play needs to be called in the same browser thread as the users click.
    // Otherwise you'll get a black video with a user interaction required error
    this.webSDKService.scene
      .startVideo()
      .then(() => (this.videoRef.nativeElement.muted = false))
      .catch((error) => this.log('startVideo failed:', error));
  }

  public disconnect() {
    this.log('disconnect');
    this.isConnected = false;
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

  public setMicrophoneEnabled(enabled: boolean) {
    return this.executeCommand(
      () => this.webSDKService.scene.setMediaDeviceActive({ microphone: enabled }),
      'setMicrophoneEnabled ',
      enabled,
    );
  }

  public setCameraEnabled(enabled: boolean) {
    return this.executeCommand(
      () => this.webSDKService.scene.setMediaDeviceActive({ camera: enabled }),
      'setCameraEnabled',
      enabled,
    );
  }

  private stopSpeaking() {
    return this.executeCommand(() => this.webSDKService.persona.stopSpeaking(), 'stopSpeaking');
  }

  public getPersona() {
    return this.executeCommand(() => this.webSDKService.persona, 'getPersona');
  }

  public getScene() {
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
    this.webSDKService.scene.startRecognize();
    this.isConnected = true;
    this.connected.emit();
  }

  private onConnectionError(error: any) {
    this.log(`session connection failed, error: ${error}`);
  }

  private onDisconnected = () => {
    console.log('EVENTS - onDisconnected');
    this.isConnected = false;
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

  private onTimeout = () => {
    this.disconnect();
  };

  private sceneCallbacks: SceneCallbacks = {
    onConversationResult: this.onConversationResult,
    onSpeechMarker: this.onSpeechMarker,
    onDisconnectResult: this.onTimeout,
  };
}

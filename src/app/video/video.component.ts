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
import { SMWebSDKService, SceneCallbacks, Persona } from '../services/smwebsdk.service';
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
  @Output()
  public connected = new EventEmitter();

  @Output()
  public disconnected = new EventEmitter();

  @Output()
  public userSpoke = new EventEmitter<string>();

  @Output()
  public dpSpoke = new EventEmitter<string>();

  @Output()
  public speechMarker = new EventEmitter<string>();

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
    this.onDisconnected();
    this.webSDKService.unregisterEventCallbacks(this.sceneCallbacks);
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

  public ngAfterViewInit() {
    this.webSDKService.initialise(this.videoRef.nativeElement);
    if (this.autoconnect) {
      this.connect();
    }
    this.initHostResizeWatcher();
  }

  public ngOnDestroy() {
    this.resizeObserver.unobserve(this.nativeElement);
    this.disconnect();
  }

  private bindPublicMethods() {
    this.publicMethods.map(
      ([name, implementation]) => (this.nativeElement[name] = implementation.bind(this)),
    );
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
    this.webSDKService.registerEventCallbacks(this.sceneCallbacks);
    this.setMicrophoneEnabled(this._microphoneEnabled);
    this.connected.emit();
  }

  private onConnectionError(error: any) {
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
  };

  private sceneCallbacks: SceneCallbacks = {
    onConversationResult: this.onConversationResult,
    onSpeechMarker: this.onSpeechMarker,
  };
}

import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { Persona, Scene } from '@soulmachines/smwebsdk';
import { SpeechMarkerEventArgs } from '../services/smwebsdk.service';

enum ConnectionState {
  Disconnecting = 'disconnecting',
  Disconnected = 'disconnected',
  Connecting = 'connecting',
  Connected = 'connected',
}
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements AfterViewInit {
  @Input('token-server') public tokenServer: string;
  @Input('api-key') public apiKey: string;
  @Input('autoconnect') public autoconnect: string;
  @Input('greeting') public greetingText: string = "Got any questions? I'm happy to help.";
  @Input('profile-picture') public profilePicture: string;
  @ViewChild('video') videoElement: VideoComponent;

  @Input('self') public self: WidgetComponent;
  @Input('scene') public scene: Scene;
  @Input('persona') public persona: Persona;

  @Output()
  public speechMarker = new EventEmitter<SpeechMarkerEventArgs>();

  public ConnectionState = ConnectionState;
  public connectionState = ConnectionState.Disconnected;
  public cameraEnabled = false;
  public micEnabled = false;

  constructor(private elementRef: ElementRef) {
    this.self = this;
  }

  ngAfterViewInit(): void {
    //if (this.autoconnect) {
    this.connect();
    //}
  }

  connect() {
    this.connectionState = ConnectionState.Connecting;
    this.videoElement.connect();
  }

  disconnect() {
    this.connectionState = ConnectionState.Disconnecting;
    this.videoElement.disconnect();
  }

  onConnected() {
    this.connectionState = ConnectionState.Connected;
    this.cameraEnabled = this.videoElement.getScene().isCameraActive();
    this.micEnabled = this.videoElement.getScene().isMicrophoneActive();
    this.scene = this.videoElement.getScene();
    this.persona = this.videoElement.getPersona();

    // set user mic to match dp audio state
    this.micEnabled = !!this.videoElement.videoState.audio;
    this.videoElement.setMicrophoneEnabled(this.micEnabled);

    // speech markers
    this.scene.onSpeechMarkerEvents['1'].addListener((persona, speechMarker) => {
      if (speechMarker.name === 'marker') {
        const event = new CustomEvent('marker', { detail: speechMarker });
        this.elementRef.nativeElement.dispatchEvent(event);
      }
    });
  }

  onDisconnected() {
    this.connectionState = ConnectionState.Disconnected;
  }

  toggleCamera() {
    this.cameraEnabled = !this.cameraEnabled;
    this.videoElement.setCameraEnabled(this.cameraEnabled);
  }

  toggleMic() {
    this.micEnabled = !this.micEnabled;
    this.videoElement.setMicrophoneEnabled(this.micEnabled);
  }
}

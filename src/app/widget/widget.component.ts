import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ContentCard } from '@soulmachines/smwebsdk';
import { VideoComponent } from '../video/video.component';

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
export class WidgetComponent implements AfterViewInit{

  @Input('token-server') public tokenServer: string;
  @Input('api-key') public apiKey: string;
  @Input('auto-connect') public autoConnect: string;
  @Input('greeting') public greetingText: string = "Got any questions? I'm happy to help.";
  @Input('profile-picture') public profilePicture: string;
  @ViewChild('video') videoElement: VideoComponent;

  public ConnectionState = ConnectionState;
  public connectionState = ConnectionState.Disconnected;
  public cameraEnabled = false;
  public micEnabled = false;
  public activeCards: ContentCard[] = [];

  ngAfterViewInit(): void {
    if (sessionStorage.getItem('sm-session-id')) {
      this.connect();
    }
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
  }

  onDisconnected() {
    this.connectionState = ConnectionState.Disconnected;
  }

  onCardChanged(cards: ContentCard[]) {
    this.activeCards = cards;
  }

  toggleCamera() {
    this.cameraEnabled = !this.cameraEnabled;
    this.videoElement.setCameraEnabled(this.cameraEnabled);
  }

  toggleMic() {
    this.micEnabled = !this.micEnabled;
    this.videoElement.setMicrophoneEnabled(this.micEnabled);
  }

  async sendTextMessage(message: string) {
    await this.videoElement.sendTextMessage(message);
    this.videoElement.clearActiveCards();
  }
}

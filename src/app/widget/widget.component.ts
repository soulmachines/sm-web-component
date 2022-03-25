import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent {
  @Input('token-server') public tokenServer: string;
  @Input('api-key') public apiKey: string;
  @Input('auto-connect') public autoConnect: string;
  @Input('greeting') public greetingText: string = "Got any questions? I'm happy to help.";
  @Input('profile-picture') public profilePicture: string;
  @ViewChild('video') videoElement;

  public isConnected: boolean = false;
  public isConnecting: boolean = false;

  constructor() {}

  connect() {
    this.videoElement.connect();
    this.isConnecting = true;
  }

  disconnect() {
    this.videoElement.disconnect();
    this.isConnecting = false;
  }

  onConnected() {
    this.isConnected = true;
  }

  onDisconnected() {
    this.isConnected = false;
  }
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @Input('token-server') public tokenServer: string;
  @Input('api-key') public apiKey: string;
  @Input('auto-connect') public autoConnect: string;
  @Input('greeting') public greetingText: string = "Got any questions? I'm happy to help.";
  @Input('profile-picture') public profilePicture: string;
  @ViewChild('video') videoElement;

  public isWaiting: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  connect() {
    this.videoElement.connect();
    this.isWaiting = false;
  }

  disconnect() {
    this.videoElement.disconnect();
    this.isWaiting = true;
  }
}

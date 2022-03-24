import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}

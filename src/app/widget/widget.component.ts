import { Component, Input, OnInit } from '@angular/core';
import { SMWebSDKService } from '../services/smwebsdk.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @Input('token-server') public tokenServer: string;

  constructor(public websdkService: SMWebSDKService) {}

  ngOnInit(): void {}
}

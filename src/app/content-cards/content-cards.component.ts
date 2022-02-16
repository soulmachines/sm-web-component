import { Component, OnInit } from '@angular/core';
import { SMWebSDKService } from '../services/smwebsdk.service';

@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.scss'],
  providers: [SMWebSDKService],
})
export class ContentCardsComponent implements OnInit {
  constructor(public websdkService: SMWebSDKService) {}

  public ngOnInit(): void {}
}

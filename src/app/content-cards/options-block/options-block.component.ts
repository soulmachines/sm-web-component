import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  HostBinding,
  AfterViewInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SMWebSDKService } from '../../services/smwebsdk.service';
import { OptionsBlockData } from './models/options-block-data.model';
import { OptionsBlockOptionData } from './models/options-block-option.model';

@Component({
  selector: 'app-options-block',
  templateUrl: './options-block.component.html',
  styleUrls: ['./options-block.component.scss'],
})
export class OptionsBlockComponent implements OnInit, AfterViewInit {
  @Input() public id = '';
  @Input() public actionable = false;
  @Input() public data: OptionsBlockData;
  @Input() public active = true;
  @HostBinding('class.visible') public contentReady = false;

  constructor(private domSanitizer: DomSanitizer, public webSDKService: SMWebSDKService) {}

  public ngOnInit() {}

  public ngAfterViewInit() {
    this.contentReady = true;
  }

  public videoClickHandler(option: OptionsBlockOptionData) {
    const videoMap = {
      1: '1st',
      2: '2nd',
      3: '3rd'
    }
    
    const quoteQuery = `play the ${videoMap[option.label[0]]} video`;
    this.webSDKService.persona.conversationSend(quoteQuery, {}, {})
  }
}

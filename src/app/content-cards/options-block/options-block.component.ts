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

  constructor(private domSanitizer: DomSanitizer) {}

  public ngOnInit() {}

  public ngAfterViewInit() {
    this.contentReady = true;
  }

  public sendTextMessage(option: OptionsBlockOptionData) {
    // if (this.actionable) {
    //   const { label, value } = option;
    //   const sendTextMessage = value || label;

    //   // this.action.emit({ sendTextMessage });
    //   debugger;
    // }
    console.log(option)
  }
}

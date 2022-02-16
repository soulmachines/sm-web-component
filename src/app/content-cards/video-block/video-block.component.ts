import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  HostListener,
  ViewContainerRef,
  TemplateRef,
  HostBinding,
} from '@angular/core';
import { VideoBlockData } from './models/video-block-data.model';

import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { VideoBlockModalService } from './video-block-modal.service';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.scss'],
})
export class VideoBlockComponent implements OnInit, OnDestroy {
  @Input() public id = '';
  @Input() public data: VideoBlockData;
  @Input() public actionable = false;
  @Input() public active = true;
  @HostBinding('class.visible') public contentReady = false;

  public mediaPlaying: boolean;

  public youtubeConfig = {
    playsinline: 1,
    modestbranding: 1,
    autoplay: 1,
    // enables youtube to message the webapp, even when in localhost conditions
    origin: location.host,
  };

  // for setting up the pop-up mode
  @ViewChild('modalTemplate') private modalTemplate: TemplateRef<any>;

  public destroyed$ = new Subject();

  @HostListener('window:keyup.escape')
  public onEscapeKeyup() {
    if (this.mediaPlaying) {
      this.exitVideo();
    }
  }

  @HostListener('click')
  public onClick() {
    this.openVideo();
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private modalService: VideoBlockModalService,
  ) {}

  public ngOnInit() {
    this.initVideoScript();

    // auto play the video if defined by data
    if (this.data.autoplay && this.active) {
      setTimeout(() => {
        this.openVideo();
      }, 300);
    }
  }

  public ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private initVideoScript() {
    if (document.getElementById('youtubeScript')) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.id = 'youtubeScript';
    document.body.appendChild(script);

    return script;
  }

  public stateChange(event) {
    const currentState = event.data;
    const autoClose = this.data.autoclose;

    // we want playing state sent out as soon as possible
    if (currentState === YT.PlayerState.PLAYING) {
      // bring focus back to the main window to allow for keypresses to be captured
      // we wanted this triggered only when playing starts, otherwise it's too disruptive
      window.focus();
      return;
    }

    // we want to close the player if the video is ended & autoclose is true
    if (currentState === YT.PlayerState.ENDED && autoClose) {
      this.exitVideo();
    }
  }

  public openVideo() {
    // Create a template portal
    // const templatePortal = new TemplatePortal(this.modalTemplate, this.viewContainerRef, this);
    debugger;

    // this.modalService.show(templatePortal);
  }

  public exitVideo() {
    if (this.actionable) {
      // this.store.dispatch(sendInvisibleTextMessage({ text: this.buttonText }));
      debugger;
    }
    setTimeout(() => {
      this.modalService.hide();
    }, 300);
  }

  public imageLoaded() {
    this.contentReady = true;
  }
}

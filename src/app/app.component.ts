import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public backgroundVideo$: Observable<MediaStream>;

  @ViewChild('video', { static: false }) videoRef: ElementRef;

  constructor() {
    this.backgroundVideo$ = from(navigator.mediaDevices.getUserMedia({audio: true, video: true}));
  }

  public videoStateChange(playing: boolean) {
    const videoEl: HTMLVideoElement = this.videoRef.nativeElement;
    if (playing) {
      videoEl.pause();
    } else {
      videoEl.play();
    }
  }
}

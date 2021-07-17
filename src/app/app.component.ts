import { HttpClient } from '@angular/common/http';
import {
  Component,
  ViewChild,
  ElementRef,
  Injector,
  OnInit,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Observable } from 'rxjs';
import { SoulMachines } from './data/soulmachines';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  /*public localStream$: Observable<MediaStream>;
  public remoteStream$: Observable<MediaStream>;

  @ViewChild('video', { static: false }) videoRef: ElementRef;

  constructor(public sm: SoulMachines, private http: HttpClient) {

    http.get('/auth/authorize').subscribe((result: any) =>
      this.startSoulMachines(result.jwt, result.url)
    );

    // this.sm.startLocalStream();
    // this.localStream$ = from(sm.localStream);
    // this.remoteStream$ = sm.remoteStream;
    
  }

  private startSoulMachines(jwt: string, sessionServer: string) {
    this.sm.connect({
      jwt,
      sessionServer,
    });
  }

  public videoStateChange(playing: boolean) {
    const videoEl: HTMLVideoElement = this.videoRef.nativeElement;
    if (playing) {
      videoEl.pause();
    } else {
      videoEl.play();
    }
  }*/
}

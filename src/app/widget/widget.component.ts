import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, Input, SimpleChanges, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { SoulMachines } from '../data/soulmachines';
import { SoulMachinesConfig } from '../data/soulmachines-config';
import { ResizeObserver } from '@juggle/resize-observer';
import { RtcEventName } from '../data/webrtc/events/rtc-event-name.enum';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnChanges, AfterViewInit, OnDestroy {

  private resizeObserver: ResizeObserver;

  public localStream$: Observable<MediaStream>;
  public remoteStream$: Observable<MediaStream>;

  @Input() public tokenserver: string = '';

  @ViewChild('video', { static: false }) videoRef: ElementRef;

  constructor(public sm: SoulMachines, private http: HttpClient, private hostRef: ElementRef) {

    console.log('widget: constructor', this.tokenserver);

    this.sm.addEventListener(RtcEventName.Connected, () => this.onConnected());
    // this.sm.session.addEventListener('connected', () => this.onConnected());
    //this.sm.session.addEventListener('message', (msg) => this.onMessage(msg));
    
    // this.sm.startLocalStream();
    // this.localStream$ = from(sm.localStream);
    // this.remoteStream$ = sm.remoteStream;
    
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.tokenserver) {
      this.connect();
    }
  }

  public ngAfterViewInit() {
    this.initHostResizeWatcher();
    // this.initVideoStartedListener();
  }

  public ngOnDestroy() {
    this.resizeObserver.unobserve(this.hostRef.nativeElement);
  }

  public connect() {
    this.http.get<SoulMachinesConfig>(this.tokenserver).pipe(
      tap((config) => this.sm.connect(config)),
    ).subscribe();
  }

  public disconnect() {
    // TODO
  }

  private initHostResizeWatcher() {
    this.resizeObserver = new ResizeObserver(() => this.resizeVideoStream());
    this.resizeObserver.observe(this.hostRef.nativeElement);
  }

  private resizeVideoStream() {
    if (!this.sm.webrtc) {
      return;
    }

    const element = this.hostRef.nativeElement;
    const width = element.clientWidth;
    const height = element.clientHeight;

    this.sm.webrtc.sendVideoBounds(width, height);
  }

  private onConnected() {
    console.log('>> connected');

    this.resizeVideoStream();
  }

  /*private onMessage(msg) {
    console.log('>> message', msg);
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

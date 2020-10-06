import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.css']
})
export class VideoBlockComponent implements OnInit {

  @Input() videoId: string;
  @Output() playing = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  public stateChange(event) {
    console.log({event});

    const playing = event.data === 1;
    this.playing.emit(playing);
  }

}
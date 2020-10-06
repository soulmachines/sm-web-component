import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoBlockComponent } from './video-block.component';

@NgModule({
  imports: [
    CommonModule,
    YouTubePlayerModule,
  ],
  exports: [VideoBlockComponent],
  declarations: [VideoBlockComponent],
})
export class VideoBlockModule { }
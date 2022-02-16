import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoBlockComponent } from './video-block.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [CommonModule, YouTubePlayerModule],
  declarations: [VideoBlockComponent],
  exports: [VideoBlockComponent],
})
export class VideoBlockModule {}

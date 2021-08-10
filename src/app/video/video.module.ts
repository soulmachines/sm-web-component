import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent as VideoComponent } from './video.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VideoComponent],
  entryComponents: [VideoComponent],
})
export class VideoModule {}

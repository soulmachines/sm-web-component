import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { LoadingIndicatorModule } from '../loading-indicator/loading-indicator.module';

@NgModule({
  imports: [CommonModule, LoadingIndicatorModule],
  declarations: [VideoComponent],
  entryComponents: [VideoComponent],
})
export class VideoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [CommonModule, SpinnerModule],
  exports: [VideoComponent],
  declarations: [VideoComponent],
  entryComponents: [VideoComponent],
})
export class VideoModule {}

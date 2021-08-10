import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent as VideoComponent } from './video.component';
import { SMWebSDKService } from '../services/smwebsdk.service';

@NgModule({
  imports: [CommonModule],
  providers: [SMWebSDKService],
  declarations: [VideoComponent],
  entryComponents: [VideoComponent],
})
export class VideoModule {}

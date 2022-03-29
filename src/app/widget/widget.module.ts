import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import { VideoModule } from '../video/video.module';
import { GreetingModule } from '../greeting/greeting.module';
import { IconModule } from '../icon/icon.module';
import { ProfilePictureModule } from '../profile-picture/profile-picture.module';

@NgModule({
  declarations: [WidgetComponent],
  entryComponents: [WidgetComponent],
  imports: [CommonModule, VideoModule, GreetingModule, IconModule, ProfilePictureModule],
})
export class WidgetModule {}

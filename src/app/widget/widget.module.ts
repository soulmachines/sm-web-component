import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import { VideoModule } from '../video/video.module';
import { GreetingModule } from '../greeting/greeting.module';
import { IconModule } from '../icon/icon.module';
import { DefaultProfilePictureModule } from '../default-profile-picture/default-profile-picture.module';

@NgModule({
  declarations: [WidgetComponent],
  entryComponents: [WidgetComponent],
  imports: [CommonModule, VideoModule, GreetingModule, IconModule, DefaultProfilePictureModule],
})
export class WidgetModule {}

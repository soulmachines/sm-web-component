import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import { VideoModule } from '../video/video.module';
import { ContentCardsModule } from '../content-cards/content-cards.module';

@NgModule({
  declarations: [WidgetComponent],
  entryComponents: [WidgetComponent],
  imports: [CommonModule, VideoModule, ContentCardsModule],
})
export class WidgetModule {}

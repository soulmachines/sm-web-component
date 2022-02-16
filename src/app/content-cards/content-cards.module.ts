import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardsComponent } from './content-cards.component';
import { OptionsBlockModule } from './options-block/options-block.module';
import { VideoBlockModule } from './video-block/video-block.module';

@NgModule({
  declarations: [ContentCardsComponent],
  exports: [ContentCardsComponent],
  imports: [CommonModule, OptionsBlockModule, VideoBlockModule],
})
export class ContentCardsModule {}

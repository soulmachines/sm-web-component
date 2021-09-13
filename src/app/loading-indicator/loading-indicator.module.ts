import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './loading-indicator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingIndicatorComponent],
  exports: [LoadingIndicatorComponent],
})
export class LoadingIndicatorModule {}

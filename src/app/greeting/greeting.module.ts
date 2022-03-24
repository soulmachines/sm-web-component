import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [GreetingComponent],
  exports: [GreetingComponent],
})
export class GreetingModule {}

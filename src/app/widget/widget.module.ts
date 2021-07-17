import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetComponent],
  entryComponents: [ WidgetComponent ]
})
export class WidgetModule { }

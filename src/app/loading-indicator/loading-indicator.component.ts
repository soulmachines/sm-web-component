import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  template: `<div class="sm-spinner-container">
    <div class="smloadingspinner">
      <div><div></div></div>
      <div><div></div></div>
      <div><div></div></div>
      <div><div></div></div>
      <div><div></div></div>
    </div>
  </div>`,
  styleUrls: ['./loading-indicator.component.scss'],
})
export class LoadingIndicatorComponent {}

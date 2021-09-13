import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  template: `<div class="loadingspinner-outer">
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

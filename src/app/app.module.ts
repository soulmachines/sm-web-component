import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { createCustomElement } from '@angular/elements';
import { WidgetModule } from './widget/widget.module';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, WidgetModule],
  declarations: [],
  bootstrap: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(WidgetComponent, { injector: injector });
    customElements.define('sm-widget', el);
  }

  public ngDoBootstrap() {}
}

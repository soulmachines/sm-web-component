import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { createCustomElement } from '@angular/elements';
import { VideoModule } from './video/video.module';
import { VideoComponent } from './video/video.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, VideoModule],
  declarations: [],
  bootstrap: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(VideoComponent, { injector: injector });
    customElements.define('sm-video', el);
  }

  public ngDoBootstrap() {}
}

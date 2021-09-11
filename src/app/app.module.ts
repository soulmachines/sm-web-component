import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { VideoModule } from './video/video.module';
import { VideoComponent } from './video/video.component';
import { LoadingIndicatorModule } from './loading-indicator/loading-indicator.module';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, VideoModule, LoadingIndicatorModule],
  declarations: [],
  bootstrap: [],
})
export class AppModule {
  elements = [
    { component: VideoComponent, name: 'sm-video' },
    { component: LoadingIndicatorComponent, name: 'sm-loading-indicator' },
  ];

  constructor(injector: Injector) {
    this.elements.map((element) => {
      const el = createCustomElement(element.component, { injector: injector });
      customElements.define(element.name, el);
    });
  }

  public ngDoBootstrap() {}
}

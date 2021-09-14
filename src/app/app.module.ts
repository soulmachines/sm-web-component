import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { VideoModule } from './video/video.module';
import { VideoComponent } from './video/video.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, VideoModule, SpinnerModule],

  declarations: [],
  bootstrap: [],
})
export class AppModule {
  elements = [
    { component: VideoComponent, name: 'sm-video' },
    { component: SpinnerComponent, name: 'sm-spinner' },
  ];

  constructor(injector: Injector) {
    this.elements.map((element) => {
      const el = createCustomElement(element.component, { injector: injector });
      customElements.define(element.name, el);
    });
  }

  public ngDoBootstrap() {}
}

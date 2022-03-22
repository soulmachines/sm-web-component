import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { VideoModule } from './video/video.module';
import { VideoComponent } from './video/video.component';
import { SpinnerModule } from './spinner/spinner.module';
import { GreetingModule } from './greeting/greeting.module';
import { WidgetComponent } from './widget/widget.component';
import { WidgetModule } from './widget/widget.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    WidgetModule,
    VideoModule,
    SpinnerModule,
    GreetingModule,
  ],

  declarations: [],
  bootstrap: [],
})
export class AppModule {
  elements = [
    { component: VideoComponent, name: 'sm-video' },
    { component: WidgetComponent, name: 'sm-widget' },
  ];

  constructor(injector: Injector) {
    this.elements.map((element) => {
      const el = createCustomElement(element.component, { injector: injector });
      customElements.define(element.name, el);
    });
  }

  public ngDoBootstrap() {}
}

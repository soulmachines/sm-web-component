import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';

/**
 * This service to make the portal host instance a singleton.
 *
 * In previous testing, the portal host can crash the entire app silently if there were
 * multiple instances created and destroyed.
 */
@Injectable({ providedIn: 'root' })
export class VideoBlockModalService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
  ) {
    /*this.portalHost = new DomPortalOutlet(
      document.querySelector('body'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector,
    );*/
  }

  public show() {
    /*const isAttached = this.portalHost.hasAttached();

    if (isAttached) {
      return;
    }

    this.portalHost.attach(template);
    */
    debugger;
  }

  public hide() {
    // this.portalHost.detach();
    debugger;
  }
}

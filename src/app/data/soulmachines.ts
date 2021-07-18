import { Injectable } from '@angular/core';
import { SoulMachinesConfig } from './soulmachines-config';
import { WebRTCConnection } from './webrtc/webrtc';
import { Session } from './session/session';
import { Persona } from './persona/persona';
import { Scene } from './scene/scene';
import { WebsocketMessage } from './session/models/websocket-message';

@Injectable({
  providedIn: 'root',
})
export class SoulMachines extends EventTarget {
  public session: Session;
  public webrtc: WebRTCConnection;
  public scene: Scene;
  public persona: Persona;

  public addEventListener: (
    type: string,
    listener: (event: CustomEvent) => any
  ) => void;

  public removeEventListener: (
    type: string,
    listener: (event: CustomEvent) => any
  ) => void;

  constructor() {
    super();
  }

  public connect(config: SoulMachinesConfig) {
    console.log('sm.connect', { config });

    // create the websocket session
    this.session = new Session(config);
    this.session.addEventListener('message', (message) =>
      this.emitMessageAsEvent(message)
    );

    // initialise all websocket-dependent classes
    this.webrtc = new WebRTCConnection(this.session);
    this.scene = new Scene(this.session);
    this.persona = new Persona(this.session);
  }

  private emitMessageAsEvent(message: MessageEvent) {
    const payload = JSON.parse(message.data);
    const { name, body } = payload;

    const event = new CustomEvent(name, { detail: body });
    this.dispatchEvent(event);
  }

  public on(eventName: string, callback: Function) {
    console.log('add event listener for', eventName);
  }

  /*public send(request: SMRequest): Promise {
    
  }*/
}

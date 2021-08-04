import { SoulMachinesConfig } from '../soulmachines-config';
import { RtcEventName } from '../webrtc/events/rtc-event-name.enum';

export class Session extends EventTarget {
  private isRuntimeHost = !!window['SmIsUnderRuntimeHost'];
  private ws: WebSocket;

  public addEventListener: (
    type: string,
    listener: (event: MessageEvent) => any
  ) => void;
  public removeEventListener: (
    type: string,
    listener: (event: MessageEvent) => any
  ) => void;
  public send: (data: string) => void;
  public close: (code?: number, reason?: string) => void;

  constructor(config: SoulMachinesConfig) {
    super();

    if (this.isRuntimeHost) {
      this.configureRuntimeHost();
    } else {
      this.configureWebSocket(config);
    }
  }

  private configureRuntimeHost() {
    window['SmRuntimeHostReceiveMessage'] = (message) => {
      const event = new MessageEvent('message', { data: message });
      this.dispatchEvent(event);
    };

    this.send = (data: string) => window['SmRuntimeHostSendMessage'](data);

    window.setTimeout(() => {
      console.log('>> send fake connected message');
      const data = JSON.stringify({
        category: 'webrtc',
        kind: 'event',
        name: RtcEventName.Connected,
        body: {},
      });
      const event = new MessageEvent('message', { data });
      this.dispatchEvent(event);
    }, 3000);
  }

  private configureWebSocket(config: SoulMachinesConfig) {
    this.ws = new WebSocket(`${config.url}?access_token=${config.jwt}`);
    this.addEventListener = (type, listener) =>
      this.ws.addEventListener(type, listener);
    this.removeEventListener = (type, listener) =>
      this.ws.removeEventListener(type, listener);
    this.send = (data) => this.ws.send(data);
    this.close = (code, reason) => this.ws.close(code, reason);
  }
}

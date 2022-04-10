import { SessionConfig } from './models/session-config';
import { SessionEventType } from './events/session-event-type';
import { SessionError } from './errors/session-error';
import { WebsocketMessage } from './models/websocket-message';

export const createSession = async (config: SessionConfig): Promise<Session> => {
  const session = new Session();
  await session.connect(config);
  return session;
};

export class Session extends EventTarget {
  private ws?: WebSocket;
  private pendingRequests: { [transactionId: string]: { resolve: any; reject: any } } = {};

  public async connect(config: SessionConfig): Promise<void> {
    const { sessionServer, sessionToken } = config;
    const url = `${sessionServer}?access_token=${sessionToken}`;

    this.ws = new WebSocket(url);
    this.ws.addEventListener('message', (e) => this.onWebsocketMessage(e));
    this.ws.addEventListener('error', (e) => this.onWebsocketError(e));
    this.ws.addEventListener('open', () => this.onWebsocketOpen(), { once: true });
    this.ws.addEventListener('close', () => this.onWebsocketClose(), { once: true });
  }

  public async disconnect() {
    if (this.ws) {
      // websocket status codes specification.
      // code 1000 means 'normal close', close was intentional
      // https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4
      const code = 1000;
      this.ws.close(code);
    } else {
      throw new Error(SessionError.NoSession, {});
    }
  }

  public sendMessage(message: WebsocketMessage) {
    const messageString = JSON.stringify(message);
    this.ws?.send(messageString);
  }

  public sendRequest(message: WebsocketMessage): Promise<WebsocketMessage> {
    // only 'request' type will actually receive a response
    // from the server, so any other type will never resolve.
    if (message.category !== 'request') {
      throw 'must be a request';
    }

    // add a unique identifier to the request,
    // so that we can resolve it when the
    // matching response is received
    const transactionId = '123';
    message.transaction = transactionId;

    // store a reference to the request promise so that
    // we can resolve it when we receive a response
    let requestRef;
    const request = new Promise<WebsocketMessage>((resolve, reject) => {
      requestRef = { resolve, reject };
      this.pendingRequests[transactionId] = requestRef;
    });

    // send on the websocket
    const messageString = JSON.stringify(message);
    this.ws?.send(messageString);

    // return the promise, which will be resolved
    // when a response message is received
    return request;
  }

  /**
   * ===============
   * PRIVATE API
   */

  private onWebsocketMessage(e: MessageEvent) {
    // websocket messages always arrive as a JSON-encoded string,
    // so we should decode it here before emitting the data
    const message: WebsocketMessage = JSON.parse(e.data);

    // if this is a response to a request,
    // resolve the original request
    if (message.transaction) {
      try {
        const request = this.pendingRequests[message.transaction];
        request.resolve(message);

        // TODO: should we ever reject? can we get an error back?
      } catch {
        throw `could not resolve request with transaction id ${message.transaction}`;
      }
    }

    // dispatch as an event in case there are any event listeners for it
    // TODO: could this be a custom event type?
    const event = new MessageEvent('message', { data: message });
    this.dispatchEvent(event);
  }

  private onWebsocketError(e: Event) {
    // const detail = { error: e., message: 'Websocket error' };
    // const event = new CustomEvent(SessionEventType.Error, { detail });
    this.dispatchEvent(e);
  }

  private onWebsocketOpen() {
    const event = new Event(SessionEventType.Connect);
    this.dispatchEvent(event);
  }

  private onWebsocketClose() {
    // TODO: clean up event listeners

    const event = new Event(SessionEventType.Disconnect);
    this.dispatchEvent(event);
  }
}

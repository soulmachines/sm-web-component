import { Session } from '../session/session';
import { SceneRequestType } from './requests/scene-request-type.enum';
import { WebsocketMessage } from '../session/models/websocket-message';

export class Scene {
  constructor(private session: Session) {}

  // TODO: these public functions should return promises

  public startRecognize() {
    this.websocketSend(SceneRequestType.StartRecognize, {});
  }

  public stopRecognize() {
    this.websocketSend(SceneRequestType.StopRecognize, {});
  }

  private websocketSend(requestType: SceneRequestType, body: any) {
    const message: WebsocketMessage = {
      category: 'scene',
      kind: 'request',
      name: requestType,
      body,
    };

    this.session.send(JSON.stringify(message));
  }
}

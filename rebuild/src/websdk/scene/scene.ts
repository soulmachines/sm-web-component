import { Session } from '../session/session';
import { SceneRequestType } from './requests/scene-request-type.enum';
import { WebsocketMessage } from '../session/models/websocket-message';

export class Scene {
  private session?: Session;

  // TODO: all returned promises should resolve to something more specific

  /**
   * Configure the Session object to be used for all
   * server communications.
   *
   * For internal use.
   *
   * @hidden
   * @param session
   */
  public async useSession(session: Session) {
    this.session = session;
  }

  /**
   * Start the speech-to-text recognizer, allowing the DP
   * to respond to the user's speech.
   *
   * Note that this does not affect the microphone settings,
   * this is a server-side setting only.
   */
  public async startRecognize(): Promise<WebsocketMessage> {
    return this.sendRequest(SceneRequestType.StartRecognize, {});
  }

  /**
   * Stop the speech-to-text recognizer, preventing the DP
   * from responding to the user's speech.
   *
   * Note that this does not affect the microphone settings,
   * this is a server-side setting only.
   */
  public async stopRecognize(): Promise<WebsocketMessage> {
    return this.sendRequest(SceneRequestType.StopRecognize, {});
  }

  /**
   * ===============
   * PRIVATE API
   * ===============
   */

  private sendRequest(requestType: SceneRequestType, body: any = {}): Promise<WebsocketMessage> {
    if (!this.session) {
      throw 'cannot send, no session';
    }

    const message: WebsocketMessage = {
      category: 'scene',
      kind: 'request',
      name: requestType,
      body,
    };

    return this.session.sendRequest(message);
  }
}

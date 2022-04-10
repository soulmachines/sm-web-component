import { SoulMachinesOptions } from './soulmachines-config';
import { WebRTCConnection } from './webrtc/webrtc';
import { createSession, Session } from './session/session';
import { Persona } from './persona/persona';
import { Scene } from './scene/scene';

export class SoulMachines extends EventTarget {
  public session?: Session;
  public webrtc = new WebRTCConnection();
  public scene = new Scene();
  public persona = new Persona();

  constructor(options?: SoulMachinesOptions) {
    super();

    // config may be passed directly to the constructor
    // as shorthand for constructing and then connecting.
    if (options) {
      this.connect(options);
    }
  }

  /**
   *
   * @param config Configuration options for the current session
   * @returns
   */
  public async connect(options: SoulMachinesOptions): Promise<string> {
    // create a new session, which will establish
    // a websocket connection with the session server
    this.session = await createSession(options);

    // initialise all websocket-dependent classes
    await Promise.all([
      this.webrtc.useSession(this.session),
      this.scene.useSession(this.session),
      this.persona.useSession(this.session),
    ]);

    // return the session id for back-compat support
    return 'session id here';
    // TODO: ^ return session id or something better
  }

  public disconnect() {
    this.session?.disconnect();
  }
}

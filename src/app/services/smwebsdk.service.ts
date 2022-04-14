import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectOptions, Persona, Scene, SceneOptions } from '@soulmachines/smwebsdk';
import { Session } from '@soulmachines/smwebsdk/lib-esm/Session';
import { Observable, from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

export { Persona } from '@soulmachines/smwebsdk';
export interface SceneCallbacks {
  onConversationResult: Function;
  onSpeechMarker: Function;
  onDisconnectResult: Function;
}

export interface SpeechMarkerEventArgs {
  name: string;
  arguments: string[];
}

export interface TokenServerResult {
  jwt: string;
  url: string;
}

const personaId = 1;

@Injectable()
export class SMWebSDKService {
  public scene: Scene;
  public persona: Persona;

  public connected = false;

  constructor(private http: HttpClient) {}

  public initialise(sceneOptions: SceneOptions) {
    this.scene = new Scene(sceneOptions);
    this.scene.onDisconnected = (scene, sessionId, reason) => {
      this.disconnect();
    };

    this.persona = new Persona(this.scene, personaId);
  }

  public connect(connectOptions: ConnectOptions, tokenServer?: string): Observable<string> {
    /**
     * WebSDK does not support the fetching of JWT tokens based on a tokenServer URL,
     * so we need to do that step here. If a tokenServer is provided, this function
     * will fetch the configuration and merge the result into the connectOptions.
     */
    const getConnectOptions = async (): Promise<ConnectOptions> => {
      // if there's no token server provided then we can just
      // return the connectOptions as they are, with no changes.
      if (!tokenServer) {
        return connectOptions;
      }

      // if a token server was provided then we need to GET the configuration
      // from that endpoint, and merge it into the connectOptions object
      return this.http
        .get(tokenServer)
        .toPromise()
        .then((result: TokenServerResult) => ({
          ...connectOptions,
          tokenServer: {
            uri: result.url,
            token: result.jwt,
          },
        }));
    };

    // transform the getConnectOptions promise to an observable
    // and map that to the scene connect function
    return from(getConnectOptions()).pipe(
      switchMap((options) => this.scene.connect(options)),
      tap((sessionId) => this.onConnected(sessionId)),
    );
  }

  /**
   * Internal state-setting or side effects to run once the
   * connection has been established successfully.
   */
  private onConnected(sessionId: string) {
    (this.scene.session() as Session).setLogging(false);
    this.connected = true;
  }

  public disconnect() {
    if (this.scene) {
      this.scene.disconnect();
      this.connected = false;
    }
  }

  public registerEventCallbacks(callbacks: SceneCallbacks) {
    if (this.scene) {
      this.scene.onConversationResultEvents[personaId].addListener(callbacks.onConversationResult);
      this.scene.onSpeechMarkerEvents[personaId].addListener(callbacks.onSpeechMarker);
      this.scene.onDisconnectedEvent.addListener(callbacks.onDisconnectResult);
    }
  }

  public unregisterEventCallbacks(callbacks: SceneCallbacks) {
    if (this.scene) {
      this.scene.onConversationResultEvents[personaId].removeListener(
        callbacks.onConversationResult,
      );
      this.scene.onSpeechMarkerEvents[personaId].removeListener(callbacks.onSpeechMarker);
    }
  }

  public sendVideoBounds(width: number, height: number) {
    this.scene.sendVideoBounds(width, height);
  }
}

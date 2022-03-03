import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona, Scene } from '@soulmachines/smwebsdk';
import { Session } from '@soulmachines/smwebsdk/lib-esm/Session';
import { Observable, from, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { SoulMachinesConfig } from '../video/soulmachines-config';

export { Persona } from '@soulmachines/smwebsdk';
export interface SceneCallbacks {
  onConversationResult: Function;
  onSpeechMarker: Function;
}

export interface SpeechMarkerEventArgs {
  name: string;
  arguments: string[];
}

const personaId = 1;

@Injectable()
export class SMWebSDKService {
  public scene: Scene;
  public persona: Persona;

  public connected = false;

  constructor(private http: HttpClient) {}

  public connectWithAPIKey(videoElement: HTMLVideoElement, apiKey: string): Observable<string> {
    this.scene = new Scene({
      videoElement,
      apiKey,
    });

    this.persona = new Persona(this.scene, personaId);

    return from(this.scene.connect());
  }

  public connectWithTokenServer(
    videoElement: HTMLVideoElement,
    tokenServer: string,
  ): Observable<string> {
    if (!tokenServer) {
      throw new Error('Unable to establish a connection, tokenServer missing');
    }

    const retryOptions = {
      maxRetries: 20,
      delayMs: 500,
    };

    this.scene = new Scene({
      videoElement,
    });

    this.persona = new Persona(this.scene, personaId);

    return this.http.get<SoulMachinesConfig>(tokenServer).pipe(
      switchMap((config: SoulMachinesConfig) =>
        from(this.scene.connect(config.url, '', config.jwt, retryOptions)).pipe(
          tap(() => {
            (this.scene.session() as Session).setLogging(false);
            this.connected = true;
          }),
        ),
      ),
    );
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

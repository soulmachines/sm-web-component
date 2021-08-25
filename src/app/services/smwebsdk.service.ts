import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona, Scene } from '@soulmachines/smwebsdk';
import { Session } from '@soulmachines/smwebsdk/lib-esm/Session';
import { Subject, Observable, from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { SoulMachinesConfig } from '../video/soulmachines-config';
import { SceneCallbacks } from '../models/utilities';

@Injectable()
export class SMWebSDKService {
  public scene: Scene;
  public persona: Persona;

  public connected = false;

  constructor(private http: HttpClient) {}

  public initialise(videoElement: HTMLVideoElement) {
    this.scene = new Scene(videoElement);
    this.persona = new Persona(this.scene, 1);
  }

  public connect(tokenServer: string): Observable<string> {
    if (!tokenServer) {
      throw new Error('Unable to establish a connection, tokenServer missing');
    }

    const retryOptions = {
      maxRetries: 20,
      delayMs: 500,
    };

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

  public registerEventsCallbacks(callbacks: SceneCallbacks) {
    if (this.scene) {
      this.scene.onRecognizeResultsEvent.addListener(callbacks.onRecognizeResult);
      this.scene.onConversationResultEvents[1].addListener(callbacks.onConversationResult);
      this.scene.onUserTextEvent.addListener(callbacks.onUserText);
      this.scene.onSpeechMarkerEvents[1].addListener(callbacks.onSpeechMarker);
    }
  }

  public unregisterEventsCallbacks(callbacks: SceneCallbacks) {
    if (this.scene) {
      this.scene.onRecognizeResultsEvent.removeListener(callbacks.onRecognizeResult);
      this.scene.onConversationResultEvents[1].removeListener(callbacks.onConversationResult);
      this.scene.onUserTextEvent.removeListener(callbacks.onUserText);
      this.scene.onSpeechMarkerEvents[1].removeListener(callbacks.onSpeechMarker);
    }
  }

  public sendVideoBounds(width: number, height: number) {
    this.scene.sendVideoBounds(width, height);
  }
}

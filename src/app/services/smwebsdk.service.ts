import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { smwebsdk, Persona, Scene } from '@soulmachines/smwebsdk';
import { Session } from '@soulmachines/smwebsdk/lib-esm/Session';
import { Observable, from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { SoulMachinesConfig } from '../video/soulmachines-config';

@Injectable()
export class SMWebSDKService {
  public scene: Scene;
  public persona: Persona;

  public connected = false;

  constructor(private http: HttpClient) {}

  get smwebsdk() {
    return smwebsdk;
  }

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

    this.scene.onStateEvent.addListener(this.onState);
    this.scene.onDisconnectedEvent.addListener(this.onDisconnect);

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
      // this does not actually guarantee that the ws connection
      // has been closed. this is only that the close has been requested.
      this.onDisconnect('userEnded');
    }
  }

  public sendVideoBounds(width: number, height: number) {
    this.scene.sendVideoBounds(width, height);
  }

  private onDisconnect(reason: string) {
    this.connected = false;

    this.scene?.onStateEvent.removeListener(this.onState);
    this.scene?.onDisconnectedEvent.removeListener(this.onDisconnect);
  }

  private onState(_: Scene, messageBody: any) {
    if (messageBody.persona) {
      const data = messageBody.persona[1];
      // TODO this data needs to be passed out to video component
    }
  }
}

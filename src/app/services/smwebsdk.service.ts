import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona, Scene } from '@soulmachines/smwebsdk';
import { Session } from '@soulmachines/smwebsdk/lib-esm/Session';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { SoulMachinesConfig } from '../video/soulmachines-config';
import { merge as _merge } from 'lodash-es';

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

@Injectable({ providedIn: 'root' })
export class SMWebSDKService {
  public scene: Scene;
  public persona: Persona;

  public connected = false;

  public conversationContext: any = {};
  public activeContentCardIds: string[] = [];
  public contentCards$ = new BehaviorSubject([
    {
      component: 'none',
      data: {
        options: [],
      },
    },
  ]);

  constructor(private http: HttpClient) {}

  public initialise(videoElement: HTMLVideoElement) {
    this.scene = new Scene(videoElement);
    this.persona = new Persona(this.scene, personaId);
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

            this.watchContentCards();
          }),
        ),
      ),
    );
  }

  private watchContentCards() {
    this.persona.onSpeechMarkerEvent.addListener((persona, message) =>
      this.onSpeechMarker(persona, message),
    );

    this.persona.onConversationResultEvent.addListener((persona, message) =>
      this.onConversationResult(persona, message),
    );
  }

  private onSpeechMarker(persona, message) {
    console.log('>> onSpeechMarker:', persona, message);

    const markerType = message.name;
    const cardIds = message.arguments;

    if (markerType === 'hidecards') {
      if (cardIds.length === 0) {
        console.log('hide all cards');
        this.activeContentCardIds = [];
      } else {
        console.log('TODO hide these cards:', cardIds);
        // TODO
      }
    } else if (markerType === 'showcards') {
      console.log('show these cards:', cardIds);
      this.activeContentCardIds = cardIds;
    }

    this.updateActiveCardsList();
  }

  private onConversationResult(persona: any, message: any) {
    console.log('>> onConversationResult:', persona, message);
    debugger;

    const newContext = message.output.context;

    this.conversationContext = _merge(this.conversationContext, newContext);
    this.activeContentCardIds = [];

    this.updateActiveCardsList();
  }

  private updateActiveCardsList() {
    console.log('>> updateActiveCardsList');
    console.log('>> active cards', this.activeContentCardIds);
    console.log('>> current context', this.conversationContext);

    const cards = this.activeContentCardIds.map((id) => {
      return this.conversationContext[`public-${id}`];
    });

    console.log('>> cards:', cards);
    this.contentCards$.next(cards);
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

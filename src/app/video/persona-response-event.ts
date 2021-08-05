import { SpeechMarkerResponseBody } from '@soulmachines/smwebsdk/lib-esm/websocket-message/scene';

export interface PersonaResponseEvent {
  currentSpeech: string;
  personaId: string;
  speechMarkers: Array<SpeechMarkerResponseBody>;
  userInput: string;
}

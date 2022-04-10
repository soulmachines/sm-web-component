export interface RtcIceCandidateEvent {
  candidate?: string;
  complete: boolean;
  sdpMLineIndex?: number;
  sdpMid?: string;
  sessionId: string;
}

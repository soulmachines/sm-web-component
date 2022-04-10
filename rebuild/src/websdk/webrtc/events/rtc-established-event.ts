export interface RtcEstablishedEvent {
  iceServers: Array<{
    credential: string;
    ttl: number;
    urls: Array<string>;
    username: string;
  }>;
  settings: {
    microphoneMuteDelay: number;
  }
}
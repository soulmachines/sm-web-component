import { AuthOptions } from './session/models/auth-options';
import { WebRTCOptions } from './webrtc/models/webrtc-options';
export interface SoulMachinesOptions {
  auth: AuthOptions;
  webrtc?: WebRTCOptions;
  debug?: boolean;
}

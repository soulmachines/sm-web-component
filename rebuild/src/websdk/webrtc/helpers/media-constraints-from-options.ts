import { WebRTCOptions } from '../models/webrtc-options';

// TODO: MediaStreamConstraints type not available
// eslint-disable-next-line no-undef
export const defaultMediaConstraints: MediaStreamConstraints = {
  audio: true,
  video: true,
};

/**
 * See docs https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints
 */
// eslint-disable-next-line no-undef
export const mediaConstraintsFromOptions = (options?: WebRTCOptions): MediaStreamConstraints => {
  // eslint-disable-next-line no-undef
  const constraints: MediaStreamConstraints = {};

  // configure audio (microphone)
  if (options?.devices?.microphone) {
    constraints.audio = {
      noiseSuppression: false,
      autoGainControl: false,
      channelCount: 1,
      sampleRate: 16000,
      sampleSize: 16,
      echoCancellation: true,
    };
  }

  // configure video (camera)
  if (options?.devices?.camera) {
    constraints.video = {
      frameRate: 10.0,
      width: 640.0,
      height: 480.0,
      facingMode: 'user',
    };
  }

  return constraints;
};

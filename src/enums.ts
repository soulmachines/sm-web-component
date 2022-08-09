export enum ConnectionStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  TIMED_OUT = 'TIMED_OUT',
  ERRORED = 'ERRORED',
}

export enum widgetPosition {
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
}

export enum SessionDataKeys {
  sessionId = 'sm-session-id',
  apiKey = 'sm-api-key',
  server = 'sm-server',
  cameraEnabled = 'sm-camera-enabled',
  microphoneEnabled = 'sm-microphone-enabled',
  videoMuted = 'sm-video-muted',
}

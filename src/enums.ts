export enum ConnectionStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  TIMED_OUT = 'TIMED_OUT',
  ERRORED = 'ERRORED',
}

export enum widgetPosition {
  BOTTOM_LEFT = 'bottomLeft',
  BOTTOM_RIGHT = 'bottomRight',
}

export enum widgetLayout {
  FIXED = 'fixed',
  FULL_SCREEN = 'fullScreen',
  Embedded = 'embedded',
}

export enum SessionDataKeys {
  sessionId = 'sm-session-id',
  apiKey = 'sm-api-key',
  server = 'sm-server',
  cameraEnabled = 'sm-camera-enabled',
  microphoneEnabled = 'sm-microphone-enabled',
  videoMuted = 'sm-video-muted',
}

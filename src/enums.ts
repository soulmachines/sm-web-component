export enum ConnectionStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  TIMED_OUT = 'TIMED_OUT',
  ERRORED = 'ERRORED',
}

export enum widgetPosition {
  TOP_LEFT = 'topLeft',
  BOTTOM_LEFT = 'bottomLeft',
  BOTTOM_RIGHT = 'bottomRight',
}

export enum widgetLayout {
  FLOAT = 'float',
  FULL_FRAME = 'fullFrame',
}

export enum speechMarkers {
  FEATURE = 'feature',
  LAYOUT = 'layout',
}

export enum SessionDataKeys {
  sessionId = 'sm-session-id',
  apiKey = 'sm-api-key',
  server = 'sm-server',
  cameraEnabled = 'sm-camera-enabled',
  microphoneEnabled = 'sm-microphone-enabled',
  videoMuted = 'sm-video-muted',
}

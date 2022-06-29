export enum ConnectionStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  TIMED_OUT = 'TIMED_OUT',
  ERRORED = 'ERRORED',
}

export enum SessionDataKeys  {
  sessionId = 'sm-session-id',
  apiKey = 'sm-api-key',
  server = 'sm-server',
  camera = 'sm-camera-enabled',
  mic = 'sm-mic-enabled',
}
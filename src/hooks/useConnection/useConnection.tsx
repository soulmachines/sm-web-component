import { ConnectOptions, Scene } from '@soulmachines/smwebsdk';
import { useCallback, useRef, useState } from 'preact/hooks';
import { ConnectionStatus, SessionDataKeys } from '../../enums';

function useConnection(scene: Scene, tokenServer: string | undefined) {
  const [connectionStatus, setConnectionStatus] = useState(ConnectionStatus.DISCONNECTED);
  const [canAutoPlayAudio, setCanAutoPlayAudio] = useState(false);
  const [connectionError, setConnectionError] = useState<Error | null>(null);
  const videoRef = useRef<HTMLVideoElement>();

  const connect = useCallback(async () => {
    try {
      const connectOptions: ConnectOptions = {};

      setConnectionError(null);
      setConnectionStatus(ConnectionStatus.CONNECTING);

      if (tokenServer) {
        const res = await fetch(tokenServer);
        const { url, jwt } = await res.json();
        connectOptions.tokenServer = {
          uri: url,
          token: jwt,
        };
      }

      await scene.connect(connectOptions);

      setConnectionStatus(ConnectionStatus.CONNECTED);

      const playResult = scene.videoElement?.play();
      if (playResult !== undefined) {
        playResult
          .then(() => {
            setCanAutoPlayAudio(true);
          })
          .catch(() => {
            setCanAutoPlayAudio(false);
          });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setConnectionError(error);
      }

      cleanupSessionStorage();
      setConnectionStatus(ConnectionStatus.ERRORED);
    }
  }, [scene, tokenServer]);

  const disconnect = () => {
    cleanupSessionStorage();
    scene.disconnect();
    //cleanup video source
    //videoRef.current?.setAttribute('src', '');
    //videoRef?.current.srcObject = null;
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setConnectionStatus(ConnectionStatus.DISCONNECTED);
  };

  const cleanupSessionStorage = () => {
    sessionStorage.removeItem(SessionDataKeys.sessionId);
    sessionStorage.removeItem(SessionDataKeys.apiKey);
    sessionStorage.removeItem(SessionDataKeys.server);
    sessionStorage.removeItem(SessionDataKeys.cameraEnabled);
    sessionStorage.removeItem(SessionDataKeys.microphoneEnabled);
    sessionStorage.removeItem(SessionDataKeys.videoMuted);
  };

  scene.onDisconnectedEvent.addListener(() => {
    cleanupSessionStorage();
    //cleanup video source
    videoRef.current?.setAttribute('src', '');
    setConnectionStatus(ConnectionStatus.TIMED_OUT);
  });

  return {
    connectionStatus,
    connectionError,
    canAutoPlayAudio,
    connect,
    disconnect,
    videoRef,
    cleanupSessionStorage,
  };
}

export { useConnection };

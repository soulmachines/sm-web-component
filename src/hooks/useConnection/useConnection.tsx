import { ConnectOptions, Scene } from '@soulmachines/smwebsdk';
import { useCallback, useRef, useState } from 'preact/hooks';
import { ConnectionStatus, SessionDataKeys } from '../../enums';

function useConnection(scene: Scene, tokenServer: string | undefined) {
  const [connectionStatus, setConnectionStatus] = useState(ConnectionStatus.DISCONNECTED);
  const [canAutoPlayAudio, setCanAutoPlayAudio] = useState(false);
  const [connectionError, setConnectionError] = useState<Error | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const connect = useCallback(async () => {
    const setVideoMuted = (setVideoMuted: boolean) => {
      if (videoRef.current) {
        videoRef.current.muted = setVideoMuted;
      }
    };

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

      // Ensure we are trying to autoplay a video with sound
      setVideoMuted(false);

      // Check if we can play audio as browsers need an interaction to occur before playing sound
      // - Safari and IOS are the most restrictive
      // - When using await syntax it can end up hanging state
      // - https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#the_play_method
      const canPlayPromise = videoRef.current?.play();
      canPlayPromise
        ?.then(() => {
          setCanAutoPlayAudio(true);
        })
        .catch(() => {
          //  Ensure video is reset to muted if autoplay fails
          setVideoMuted(true);
          setCanAutoPlayAudio(false);
        });

      setConnectionStatus(ConnectionStatus.CONNECTED);
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
    cleanupVideoSrc();
    scene.disconnect();
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

  // Restarting a sesion where the previous src is present causes a black video in some browsers
  const cleanupVideoSrc = () => {
    if (!videoRef.current) return;
    videoRef.current.srcObject = null;
  };

  scene.onDisconnectedEvent.addListener(() => {
    cleanupSessionStorage();
    cleanupVideoSrc();
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

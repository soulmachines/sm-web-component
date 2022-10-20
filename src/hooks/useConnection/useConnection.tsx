import { ConnectOptions, Scene } from '@soulmachines/smwebsdk';
import { useCallback, useRef, useState } from 'preact/hooks';
import { ConnectionStatus, SessionDataKeys, widgetLayout } from '../../enums';

function useConnection(scene: Scene, tokenServer: string | undefined, initialLayout: widgetLayout) {
  const [connectionStatus, setConnectionStatus] = useState(ConnectionStatus.DISCONNECTED);
  const [canAutoPlayAudio, setCanAutoPlayAudio] = useState(false);
  const [connectionError, setConnectionError] = useState<Error | null>(null);
  const [layout, setLayout] = useState(initialLayout);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const toggleLayout = () => {
    if (layout !== widgetLayout.FLOAT) {
      setLayout(widgetLayout.FLOAT);
    } else {
      setLayout(widgetLayout.FULL_FRAME);
    }
  };

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

      // Ensure we are checking autoplay with an unmuted video
      if (videoRef.current) {
        videoRef.current.muted = false;
      }

      // Check if we can play audio as browsers need an interaction to occur before playing sound
      // - Safari and IOS are the most restrictive
      // - When using await syntax it can end up hanging state
      // - https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#the_play_method
      // - Also note that since reload, page back, and page forward are not interactions with the domain
      //   canPlayPromise will always return an error and force the DP to be muted (See
      //   https://developer.chrome.com/blog/autoplay/)
      const canPlayPromise = videoRef.current?.play();
      canPlayPromise
        ?.then(() => {
          setCanAutoPlayAudio(true);
        })
        .catch(() => {
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
    setLayout(initialLayout);
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
    layout,
    toggleLayout,
  };
}

export { useConnection };

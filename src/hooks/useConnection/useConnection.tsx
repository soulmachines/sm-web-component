import { ConnectOptions, Scene } from '@soulmachines/smwebsdk';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { ConnectionStatus, SessionDataKeys } from '../../enums';

function useConnection(scene: Scene, tokenServer: string | undefined) {
  const [connectionStatus, setConnectionStatus] = useState(ConnectionStatus.DISCONNECTED);
  const [connectionError, setConnectionError] = useState<Error | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const connect = useCallback(() => {
    const fetchVideo = async () => {
      try {
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
      } catch (error: unknown) {
        if (error instanceof Error) {
          setConnectionError(error);
        }

        cleanupSessionStorage();
        setConnectionStatus(ConnectionStatus.ERRORED);
      }
    };

    const connectOptions: ConnectOptions = {};

    setConnectionError(null);
    setConnectionStatus(ConnectionStatus.CONNECTING);

    // Autoplaying audio is complicated and we're following this doc https://developer.chrome.com/blog/play-request-was-interrupted/#how-to-fix-it
    // Our connect function needs to be synchronous. We tell the video element we're loading and make a request to fetch the video stream
    videoRef.current?.load();
    fetchVideo();
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

  useEffect(() => {
    const handleDisconnectedEvent = () => {
      cleanupSessionStorage();
      cleanupVideoSrc();
      setConnectionStatus(ConnectionStatus.TIMED_OUT);
    };

    scene.onDisconnectedEvent.addListener(handleDisconnectedEvent);

    return () => {
      scene.onDisconnectedEvent.removeListener(handleDisconnectedEvent);
    };
  }, [scene.onDisconnectedEvent]);

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    //Safari not able to play video and shows blank video when loading from bfcache, we need to force a reload when page is loaded from bfcache
    //https://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked
    //https://web.dev/bfcache/
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return {
    connectionStatus,
    connectionError,
    connect,
    disconnect,
    videoRef,
    cleanupSessionStorage,
  };
}

export { useConnection };

import { ConnectOptions, Persona, Scene } from '@soulmachines/smwebsdk';
import { useCallback, useRef, useState } from 'preact/hooks';
import { ConnectionStatus, SessionDataKeys } from '../../enums';

function useConnection(scene: Scene, tokenServer: string | undefined) {
  const [connectionStatus, setConnectionStatus] = useState(ConnectionStatus.DISCONNECTED);
  const [connectionError, setConnectionError] = useState<Error | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const sendTextMessage = (persona: Persona, text: string) => {
    if (!persona) {
      return;
    }
    persona.conversationSend(text, {}, {});
  };

  const setPersonaMuted = (videoElement: HTMLVideoElement, enabled: boolean) => {
    videoElement.muted = enabled;
    console.log(`>> setPersonaMuted: ${enabled}`);
  };

  const connect = useCallback(async () => {
    try {
      const connectOptions: ConnectOptions = {};

      setConnectionError(null);
      setConnectionStatus(ConnectionStatus.CONNECTING);

      console.log('>> before');
      if (videoRef.current) {
        console.log('>> after');
        scene.startVideo(videoRef.current);
        //videoRef.current.muted = false;
        // await scene.startVideo(videoRef.current);
        // videoRef.current.muted = false;
        //const { video, audio } = await scene.startVideo() as  { video: boolean; audio: boolean; };
        //console.log('>>', { video, audio });

        // const persona = new Persona(scene, 0);

        // if (video && audio) {
        //   sendTextMessage(persona, 'hello');
        // }

        // if (!audio) {
        //   if(videoRef.current)
        //   setPersonaMuted(videoRef.current, true);
        // }
      }

      if (tokenServer) {
        const res = await fetch(tokenServer);
        const { url, jwt } = await res.json();
        connectOptions.tokenServer = {
          uri: url,
          token: jwt,
        };
      }

      await scene.connect(connectOptions);

      console.log(
        `>> Is Session Persistence Supported: ${scene.supportsSessionPersistence()}\n>> Is Current Session Resumed Session: ${scene.isResumedSession()}`,
      );

      setConnectionStatus(ConnectionStatus.CONNECTED);
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'userInteractionRequired') {
        console.error(error);
      } else {
        cleanupSessionStorage();
        setConnectionStatus(ConnectionStatus.ERRORED);

        if (error instanceof Error) {
          setConnectionError(error);
        }
      }
    }
  }, [scene, tokenServer]);

  const disconnect = () => {
    setConnectionStatus(ConnectionStatus.DISCONNECTED);
    cleanupSessionStorage();
    scene.disconnect();
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
    setConnectionStatus(ConnectionStatus.TIMED_OUT);
    cleanupSessionStorage();
  });

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

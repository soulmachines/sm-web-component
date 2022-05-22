import { ConnectOptions, Scene } from '@soulmachines/smwebsdk';
import { useCallback, useState } from 'preact/hooks';
import { ConnectionStatus } from '../../enums';

function useConnection(scene: Scene, tokenServer: string | undefined) {
  const [connectionStatus, setConnectionStatus] = useState(ConnectionStatus.DISCONNECTED);
  const [connectionError, setConnectionError] = useState<Error | null>(null);

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
    } catch (error: unknown) {
      setConnectionStatus(ConnectionStatus.ERRORED);

      if (error instanceof Error) {
        setConnectionError(error);
      }
    }
  }, [scene, tokenServer]);

  const disconnect = () => {
    setConnectionStatus(ConnectionStatus.DISCONNECTED);
    scene.disconnect();
  };

  scene.onDisconnectedEvent.addListener(() => {
    setConnectionStatus(ConnectionStatus.TIMED_OUT);
  });

  return {
    connectionStatus,
    connectionError,
    connect,
    disconnect,
  };
}

export { useConnection };

import { ConnectOptions, Scene } from '@soulmachines/smwebsdk';
import { useCallback, useState } from 'preact/hooks';

function useConnection(scene: Scene, tokenServer: string) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<Error | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = useCallback(async () => {
    try {
      const connectOptions: ConnectOptions = {};
      setConnectionError(null);
      setIsConnecting(true);

      if (tokenServer) {
        const res = await fetch(tokenServer);
        const { url, jwt } = await res.json();
        connectOptions.tokenServer = {
          uri: url,
          token: jwt,
        };
      }

      await scene.connect(connectOptions);
      setIsConnected(true);
    } catch (error: unknown) {
      setIsConnected(false);
      if (error instanceof Error) {
        setConnectionError(error);
      }
    } finally {
      setIsConnecting(false);
    }
  }, [scene, tokenServer]);

  return { isConnected, connectionError, isConnecting, connect };
}

export { useConnection };

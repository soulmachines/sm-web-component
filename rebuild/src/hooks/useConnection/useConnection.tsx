// import { ConnectOptions, Scene } from '@soulmachines/smwebsdk';
import { useCallback, useState } from 'preact/hooks';
import { SoulMachines } from '../../websdk/soulmachines';
import { SoulMachinesOptions } from '../../websdk/soulmachines-config';

function useConnection(sm: SoulMachines, smConfig: SoulMachinesOptions) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<Error | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [personaVideoStream, setPersonaVideoStream] = useState<MediaStream | null>(null);

  const connect = useCallback(async () => {
    try {
      setConnectionError(null);
      setIsConnecting(true);

      // connect the session
      await sm.connect(smConfig);

      setIsConnected(true);
      setPersonaVideoStream(sm.webrtc.remoteStream || null);
    } catch (error: unknown) {
      setIsConnected(false);
      if (error instanceof Error) {
        setConnectionError(error);
      }
    } finally {
      setIsConnecting(false);
    }
  }, [sm, smConfig]);

  return { personaVideoStream, isConnected, connectionError, isConnecting, connect };
}

export { useConnection };

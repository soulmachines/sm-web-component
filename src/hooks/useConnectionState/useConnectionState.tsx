import { Scene, ConnectionStateData } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useConnectionState(scene: Scene) {
  const [connectionState, setConnectionState] = useState<ConnectionStateData>(
    scene.connectionState.getConnectionState(),
  );

  useEffect(() => {
    const handleConnectionStateUpdated = (state: ConnectionStateData) => {
      setConnectionState(state);
    };
    scene.connectionState.onConnectionStateUpdated.addListener(handleConnectionStateUpdated);

    return () => {
      scene.connectionState.onConnectionStateUpdated.removeListener(handleConnectionStateUpdated);
    };
  }, [scene]);

  return {
    connectionState,
  };
}

export { useConnectionState };

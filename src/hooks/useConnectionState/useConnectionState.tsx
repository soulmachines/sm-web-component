import { Scene, ConnectionStateData } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useConnectionState(scene: Scene) {
  const [connectionState, setConnectionState] = useState<ConnectionStateData>(
    scene.connectionState.getConnectionState(),
  );

  useEffect(() => {
    scene.connectionState.onConnectionStateUpdated.addListener((state: ConnectionStateData) => {
      setConnectionState(state);
    });
  }, [scene]);

  return {
    connectionState,
  };
}

export { useConnectionState };

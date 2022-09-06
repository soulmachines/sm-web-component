import { Scene, ConnectionStateTypes } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useConnectionState(scene: Scene) {
  const [connectionState, setConnectionState] = useState(ConnectionStateTypes.Disconnected);

  useEffect(() => {
    scene.connectionState.onConnectionStateUpdated.addListener((state: ConnectionStateTypes) => {
      setConnectionState(state);
    });
  }, [scene]);

  return {
    connectionState,
  };
}

export { useConnectionState };

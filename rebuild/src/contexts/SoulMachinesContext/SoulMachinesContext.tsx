import { createContext, ComponentChildren } from 'preact';
import { Scene, smwebsdk } from '@soulmachines/smwebsdk';
import { useCallback, useContext, useEffect, useMemo, useState } from 'preact/hooks';

type Context = {
  scene: Scene | null;
  isConnecting: boolean;
  isConnected: boolean;
  connectionError: Error | null;
};

// Create context with default values
export const SoulMachinesContext = createContext<Context>({
  scene: null,
  isConnecting: true,
  isConnected: false,
  connectionError: null,
});

type SoulMachinesProviderProps = {
  apiKey: string;
  children: ComponentChildren;
};

function SoulMachinesProvider({ children, apiKey }: SoulMachinesProviderProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<Error | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const scene = useMemo(
    () =>
      new smwebsdk.Scene({
        videoElement: document.createElement('video'),
        apiKey: apiKey ? apiKey : undefined,
      }),
    [apiKey],
  );

  const connect = useCallback(async () => {
    try {
      setConnectionError(null);
      setIsConnecting(true);
      await scene.connect();
      setIsConnected(true);
    } catch (error: unknown) {
      setIsConnected(false);
      if (error instanceof Error) {
        setConnectionError(error);
      }
    } finally {
      setIsConnecting(false);
    }
  }, [scene]);

  useEffect(() => {
    connect();
  }, [connect]);

  return (
    <SoulMachinesContext.Provider
      value={{
        scene,
        isConnecting,
        isConnected,
        connectionError,
      }}
    >
      {children}
    </SoulMachinesContext.Provider>
  );
}

function useSoulMachines() {
  const context = useContext(SoulMachinesContext);

  if (context === undefined) {
    throw new Error('useSoulMachines must be used within a SoulMachinesProvider');
  }

  return context;
}

export { SoulMachinesProvider, useSoulMachines };

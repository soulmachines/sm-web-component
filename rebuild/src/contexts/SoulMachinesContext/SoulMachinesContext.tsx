import { createContext, ComponentChildren } from 'preact';
import { Scene } from '@soulmachines/smwebsdk';
import { useContext, useMemo } from 'preact/hooks';
import { useConnection } from '../../hooks/useConnection';

type Context = {
  scene: Scene | null;
  isConnecting: boolean;
  isConnected: boolean;
  connectionError: Error | null;
  connect: Function;
};

// Create context with default values
const SoulMachinesContext = createContext<Context>({
  scene: null,
  isConnecting: true,
  isConnected: false,
  connectionError: null,
  connect: () => {},
});

type SoulMachinesProviderProps = {
  apiKey?: string;
  tokenServer?: string;
  children: ComponentChildren;
};

function SoulMachinesProvider({ children, apiKey, tokenServer }: SoulMachinesProviderProps) {
  const scene = useMemo(
    () =>
      new Scene({
        videoElement: document.createElement('video'),
        apiKey,
      }),
    [apiKey],
  );
  const { connect, isConnected, isConnecting, connectionError } = useConnection(scene, tokenServer);

  return (
    <SoulMachinesContext.Provider
      value={{
        scene,
        isConnecting,
        isConnected,
        connectionError,
        connect,
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

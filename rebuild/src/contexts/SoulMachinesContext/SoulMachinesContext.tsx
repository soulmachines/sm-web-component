import { createContext, ComponentChildren } from 'preact';
import { Scene } from '@soulmachines/smwebsdk';
import { useContext, useMemo } from 'preact/hooks';
import { useConnection } from '../../hooks/useConnection';
import { ConnectionStatus } from '../../enums';

type Context = {
  scene: Scene;
  connectionStatus: ConnectionStatus;
  connectionError: Error | null;
  connect: () => void;
  disconnect: () => void;
};

// Create context with default values
const SoulMachinesContext = createContext<Context | undefined>(undefined);

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

  const { connect, disconnect, connectionStatus, connectionError } = useConnection(
    scene,
    tokenServer,
  );

  return (
    <SoulMachinesContext.Provider
      value={{
        scene,
        connectionError,
        connectionStatus,
        connect,
        disconnect,
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

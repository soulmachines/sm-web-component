import { createContext, ComponentChildren } from 'preact';
// import { Scene, smwebsdk } from '@soulmachines/smwebsdk';
import { useContext, useEffect, useMemo } from 'preact/hooks';
import { useConnection } from '../../hooks/useConnection';
import { SoulMachines } from '../../websdk/soulmachines';
import { SoulMachinesOptions } from '../../websdk/soulmachines-config';

type Context = {
  sm: SoulMachines | null,
  personaVideoStream: MediaStream | null;
  isConnecting: boolean;
  isConnected: boolean;
  connectionError: Error | null;
};

// Create context with default values
export const SoulMachinesContext = createContext<Context>({
  sm: null,
  personaVideoStream: null,
  isConnecting: true,
  isConnected: false,
  connectionError: null,
});

type SoulMachinesProviderProps = {
  smConfig: SoulMachinesOptions;
  children: ComponentChildren;
};

function SoulMachinesProvider({ children, smConfig }: SoulMachinesProviderProps) {
  const sm = useMemo(
    () =>
      new SoulMachines(),
    [],
  );
  const { connect, isConnected, isConnecting, connectionError, personaVideoStream } = useConnection(sm, smConfig);

  useEffect(() => {
    connect();
  }, [connect]);

  return (
    <SoulMachinesContext.Provider
      value={{
        personaVideoStream,
        isConnecting,
        isConnected,
        connectionError,
        sm
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

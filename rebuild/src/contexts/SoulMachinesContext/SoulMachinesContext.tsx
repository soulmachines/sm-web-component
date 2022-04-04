import { createContext, ComponentChildren } from 'preact';
import { Scene, smwebsdk } from '@soulmachines/smwebsdk';
import { useCallback, useContext, useEffect, useState } from 'preact/hooks';

type Context = {
  scene: Scene | null;
  isLoading: boolean;
  error: Error | null;
};

// Create context with default values
export const SoulMachinesContext = createContext<Context>({
  scene: null,
  isLoading: true,
  error: null,
});

type SoulMachinesProviderProps = {
  apiKey: string;
  children: ComponentChildren;
};

function SoulMachinesProvider({ children, apiKey }: SoulMachinesProviderProps) {
  const proxyVideo = document.createElement('video');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [scene, setScene] = useState<Scene>(
    new smwebsdk.Scene({
      videoElement: proxyVideo,
      apiKey,
    }),
  );

  const connect = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      await scene.connect();
      setScene(scene);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [scene]);

  useEffect(() => {
    connect();
  }, [connect]);

  return (
    <SoulMachinesContext.Provider
      value={{
        scene,
        isLoading,
        error,
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

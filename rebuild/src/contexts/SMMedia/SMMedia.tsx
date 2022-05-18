import { createContext, ComponentChildren } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { useSoulMachines } from '../SoulMachinesContext';

type Context = {
  isMicrophoneEnabled: boolean;
  toggleMicrophone: () => void;
};

// Create context with default values
const SMMediaContext = createContext<Context>({
  isMicrophoneEnabled: false,
  toggleMicrophone: () => null,
});

type ProviderProps = {
  children: ComponentChildren;
};

function SMMediaProvider({ children }: ProviderProps) {
  const { scene, isConnected } = useSoulMachines();
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(false);
  const toggleMicrophone = async () => {
    if (!scene) {
      return;
    }

    try {
      await scene.setMediaDeviceActive({
        microphone: !isMicrophoneEnabled,
      });

      setIsMicrophoneEnabled(!isMicrophoneEnabled);
    } catch (error) {
      // Silently ignore this error. Revisit in QUIC-1744
    }
  };

  // Set initial active state
  useEffect(() => {
    if (isConnected && scene) {
      setIsMicrophoneEnabled(scene.isMicrophoneActive());
    }
  }, [scene, isConnected]);

  return (
    <SMMediaContext.Provider
      value={{
        isMicrophoneEnabled,
        toggleMicrophone,
      }}
    >
      {children}
    </SMMediaContext.Provider>
  );
}

function useSMMedia() {
  const context = useContext(SMMediaContext);

  if (context === undefined) {
    throw new Error('useSMMedia must be used within a SMMediaProvider');
  }

  return context;
}

export { SMMediaProvider, useSMMedia };

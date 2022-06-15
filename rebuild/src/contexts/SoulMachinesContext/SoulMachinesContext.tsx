import { createContext, ComponentChildren } from 'preact';
import { Persona, Scene } from '@soulmachines/smwebsdk';
import { MutableRef, useContext, useMemo } from 'preact/hooks';
import { useConnection } from '../../hooks/useConnection';
import { ConnectionStatus } from '../../enums';

type Context = {
  scene: Scene;
  persona: Persona;
  connectionStatus: ConnectionStatus;
  connectionError: Error | null;
  connect: () => void;
  disconnect: () => void;
  sendTextMessage: (text: string) => void;
  videoRef: MutableRef<HTMLVideoElement | null>;
};

// Create context with default values
const SoulMachinesContext = createContext<Context | undefined>(undefined);

type SoulMachinesProviderProps = {
  apiKey?: string;
  tokenServer?: string;
  children: ComponentChildren;
};

function SoulMachinesProvider({ children, apiKey, tokenServer }: SoulMachinesProviderProps) {
  const personaId = 1;
  const scene = useMemo(
    () =>
      new Scene({
        videoElement: document.createElement('video'),
        apiKey,
        requestedMediaDevices: { microphone: false, camera: false },
        requiredMediaDevices: { microphone: false, camera: false },
      }),
    [apiKey],
  );
  const persona = new Persona(scene, personaId);
  const sendTextMessage = (text: string) => {
    persona.conversationSend(text, {}, {});
  };

  const { videoRef, connect, disconnect, connectionStatus, connectionError } = useConnection(
    scene,
    tokenServer,
  );

  scene.conversation.autoClearCards = true;

  return (
    <SoulMachinesContext.Provider
      value={{
        scene,
        persona,
        connectionError,
        connectionStatus,
        connect,
        disconnect,
        sendTextMessage,
        videoRef,
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

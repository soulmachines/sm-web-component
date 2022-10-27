import { createContext, ComponentChildren } from 'preact';
import {
  Persona,
  Scene,
  ConversationStateTypes,
  ConnectionStateData,
} from '@soulmachines/smwebsdk';
import { MutableRef, useContext, useMemo } from 'preact/hooks';
import { useConnection } from '../../hooks/useConnection';
import { ConnectionStatus, widgetLayout } from '../../enums';
import { useSMMedia } from '../../hooks/useSMMedia';
import { useConversationState } from '../../hooks/useConversationState';
import { useConnectionState } from '../../hooks/useConnectionState';
import { useToggleLayout } from '../../hooks/useToggleLayout';

type Context = {
  scene: Scene;
  persona: Persona;
  connectionStatus: ConnectionStatus;
  connectionError: Error | null;
  connect: () => void;
  disconnect: () => void;
  sendTextMessage: (text: string) => void;
  videoRef: MutableRef<HTMLVideoElement | null>;
  isMicrophoneEnabled: boolean;
  isCameraEnabled: boolean;
  isVideoMuted: boolean;
  conversationState: ConversationStateTypes;
  connectionState: ConnectionStateData;
  toggleMicrophone: () => void;
  toggleCamera: () => void;
  toggleVideoMuted: () => void;
  enableDebugLogging: (enabled: boolean) => void;
  layout: widgetLayout;
  toggleLayout: () => void;
};

// Create context with default values
const SoulMachinesContext = createContext<Context | undefined>(undefined);

type SoulMachinesProviderProps = {
  apiKey?: string;
  tokenServer?: string;
  initialLayout?: widgetLayout;
  children: ComponentChildren;
};

function SoulMachinesProvider({
  children,
  apiKey,
  tokenServer,
  initialLayout = widgetLayout.FLOAT,
}: SoulMachinesProviderProps) {
  const personaId = 1;
  const scene = useMemo(
    () =>
      new Scene({
        videoElement: document.createElement('video'),
        apiKey,
        requestedMediaDevices: { microphone: false, camera: false },
        requiredMediaDevices: { microphone: false, camera: false },
        sendMetadata: {
          pageUrl: true,
        },
      }),
    [apiKey],
  );
  const persona = new Persona(scene, personaId);
  const sendTextMessage = (text: string) => {
    try {
      persona.conversationSend(text, {}, {});
    } catch (error) {
      console.error(error);
    }
  };

  const enableDebugLogging = (enabled: boolean) => {
    try {
      scene.setLogging(enabled);
      scene.contentAwareness?.setLogging(enabled);
      if (enabled) {
        scene.setMinLogLevel('debug');
        scene.contentAwareness?.setMinLogLevel('debug');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const useConversationStateData = useConversationState(scene);
  const useConnectionStateData = useConnectionState(scene);
  const { disconnect: disconnectConnection, ...useConnectionData } = useConnection(
    scene,
    tokenServer,
  );
  const useMediaData = useSMMedia({
    scene,
    canAutoPlayAudio: useConnectionData.canAutoPlayAudio,
    videoRef: useConnectionData.videoRef,
  });
  const { layout, setLayout, toggleLayout } = useToggleLayout(initialLayout);

  // Define a new global disconnection function here
  const disconnect = () => {
    disconnectConnection();
    //reset layout
    setLayout(initialLayout);
  };

  return (
    <SoulMachinesContext.Provider
      value={{
        scene,
        persona,
        layout,
        toggleLayout,
        sendTextMessage,
        enableDebugLogging,
        disconnect,
        ...useConnectionData,
        ...useMediaData,
        ...useConversationStateData,
        ...useConnectionStateData,
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

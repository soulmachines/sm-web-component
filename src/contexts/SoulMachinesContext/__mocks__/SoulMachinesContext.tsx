import { ContentCard, Persona, Scene } from '@soulmachines/smwebsdk';
import { JSX } from 'preact';
import { ConnectionStatus } from '../../../enums';

function SoulMachinesProvider(props: { children: JSX.Element }) {
  return props.children;
}

const persona = {
  conversationSend: jest.fn(),
} as unknown as Persona;

let onCardChangedCallback: (data: ContentCard[]) => void;
const scene = {
  isConnected: jest.fn(),
  isMicrophoneActive: jest.fn(() => false),
  isCameraActive: jest.fn(() => false),
  videoElement: {
    srcObject: 'mock video src',
  },
  conversation: {
    onCardChanged: {
      addListener: (cb: () => void) => {
        onCardChangedCallback = cb;
      },
      call: jest.fn((data: ContentCard[]) => {
        onCardChangedCallback(data);
      }),
    },
  },
} as unknown as Scene;

const mockUseSoulMachines = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  sendTextMessage: jest.fn(),
  connectionStatus: ConnectionStatus.DISCONNECTED,
  connectionError: null,
  isMicrophoneEnabled: false,
  isCameraEnabled: false,
  isVideoMuted: false,
  scene,
  persona,
  videoRef: jest.fn(),
  toggleMicrophone: jest.fn(),
  toggleCamera: jest.fn(),
  toggleVideoMuted: jest.fn(),
};

const useSoulMachines = jest.fn(() => mockUseSoulMachines);

export { SoulMachinesProvider, useSoulMachines };

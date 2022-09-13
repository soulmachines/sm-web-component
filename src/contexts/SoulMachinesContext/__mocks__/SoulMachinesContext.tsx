import { Persona, Scene, ConversationStateTypes } from '@soulmachines/smwebsdk';
import { JSX } from 'preact';
import { vi } from 'vitest';
import { ConnectionStatus } from '../../../enums';

vi.mock('@soulmachines/smwebsdk');

function SoulMachinesProvider(props: { children: JSX.Element }) {
  return props.children;
}

const personID = 1;
const scene = new Scene();
const persona = new Persona(scene, personID);

const mockUseSoulMachines = {
  connect: vi.fn(),
  disconnect: vi.fn(),
  sendTextMessage: vi.fn(),
  connectionStatus: ConnectionStatus.DISCONNECTED,
  connectionError: null,
  isMicrophoneEnabled: false,
  isCameraEnabled: false,
  isVideoMuted: false,
  scene,
  persona,
  conversationState: ConversationStateTypes.idle,
  connectionState: {
    name: 'mock name',
    percentageLoaded: 0,
    totalSteps: 3,
  },
  videoRef: vi.fn(),
  toggleMicrophone: vi.fn(),
  toggleCamera: vi.fn(),
  toggleVideoMuted: vi.fn(),
};

const useSoulMachines = vi.fn(() => mockUseSoulMachines);

export { SoulMachinesProvider, useSoulMachines };

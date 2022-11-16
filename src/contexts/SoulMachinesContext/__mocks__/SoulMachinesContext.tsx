import { Persona, Scene, ConversationStateTypes } from '@soulmachines/smwebsdk';
import { JSX } from 'preact';
import { ContentCards } from '../../../appComponents/ContentCards';
import { ConnectionStatus, widgetLayout } from '../../../enums';

function SoulMachinesProvider(props: { children: JSX.Element }) {
  return props.children;
}

const personID = 1;
const scene = new Scene();
const persona = new Persona(scene, personID);

const mockUseSoulMachines = {
  playVideo: jest.fn(),
  connect: jest.fn(),
  disconnect: jest.fn(),
  sendTextMessage: jest.fn(),
  enableDebugLogging: jest.fn(),
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
  setCards: jest.fn(),
  videoRef: jest.fn(),
  toggleMicrophone: jest.fn(),
  toggleCamera: jest.fn(),
  toggleVideoMuted: jest.fn(),
  layout: widgetLayout.FLOAT,
  toggleLayout: jest.fn(),
};

const useSoulMachines = jest.fn(() => mockUseSoulMachines);

export { SoulMachinesProvider, useSoulMachines };

import {
  Persona,
  Scene,
  ConversationStateTypes,
  ConnectionStateTypes,
} from '@soulmachines/smwebsdk';
import { JSX } from 'preact';
import { ConnectionStatus, widgetLayout } from '../../../enums';
import { SMContext } from '../SoulMachinesContext';

function SoulMachinesProvider(props: { children: JSX.Element }) {
  return props.children;
}

const personID = 1;
const scene = new Scene();
const persona = new Persona(scene, personID);

const mockUseSoulMachines: SMContext = {
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
    name: ConnectionStateTypes.Connected,
    currentStep: 2,
    percentageLoaded: 0,
    totalSteps: 3,
  },
  cards: [],
  featureMarkers: [],
  videoRef: { current: null },
  toggleMicrophone: jest.fn(),
  toggleCamera: jest.fn(),
  toggleVideoMuted: jest.fn(),
  layout: widgetLayout.FLOAT,
  toggleLayout: jest.fn(),
  setLayout: jest.fn(),
};

const useSoulMachines = jest.fn(() => mockUseSoulMachines);

export { SoulMachinesProvider, useSoulMachines };

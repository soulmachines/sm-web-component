import { Persona, Scene } from '@soulmachines/smwebsdk';
import { JSX } from 'preact';
import { ConnectionStatus } from '../../../enums';

function SoulMachinesProvider(props: { children: JSX.Element }) {
  return props.children;
}

const persona = {
  conversationSend: jest.fn(),
} as unknown as Persona;

const scene = {
  isConnected: jest.fn(),
  isMicrophoneActive: jest.fn(() => false),
  videoElement: {
    srcObject: 'mock video src',
  },
} as unknown as Scene;

const mockUseSoulMachines = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  sendTextMessage: jest.fn(),
  connectionStatus: ConnectionStatus.DISCONNECTED,
  connectionError: null,
  scene,
  persona,
  videoRef: jest.fn(),
};

const useSoulMachines = jest.fn(() => mockUseSoulMachines);

export { SoulMachinesProvider, useSoulMachines };

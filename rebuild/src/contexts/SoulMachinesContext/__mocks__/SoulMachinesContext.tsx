import { Scene } from '@soulmachines/smwebsdk';
import { JSX } from 'preact';
import { ConnectionStatus } from '../../../enums';

function SoulMachinesProvider(props: { children: JSX.Element }) {
  return props.children;
}

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
  connectionStatus: ConnectionStatus.DISCONNECTED,
  connectionError: null,
  scene,
};

const useSoulMachines = jest.fn(() => mockUseSoulMachines);

export { SoulMachinesProvider, useSoulMachines };
import { Scene } from '@soulmachines/smwebsdk';
import { JSX } from 'preact';

function SoulMachinesProvider(props: { children: JSX.Element }) {
  return props.children;
}

const scene = {
  isConnected: jest.fn(),
  videoElement: {
    srcObject: 'mock video src',
  },
} as unknown as Scene;

const useSoulMachinesDefaults = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  isConnecting: false,
  isConnected: false,
  isTimedOut: false,
  connectionError: null,
  scene,
};

const useSoulMachines = jest.fn(() => {
  return useSoulMachinesDefaults;
});

export { SoulMachinesProvider, useSoulMachines, useSoulMachinesDefaults };

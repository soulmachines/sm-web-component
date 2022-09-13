import { ContentCard, Persona as SDKPersona, Scene as SDKScene } from '@soulmachines/smwebsdk';
import { vi } from 'vitest';

//copy ConversationStateTypes from smwebsdk here to avoid loop reference
enum ConversationStateTypes {
  dpSpeaking = 'dpSpeaking',
  userSpeaking = 'userSpeaking',
  dpProcessing = 'dpProcessing',
  idle = 'idle',
}

export enum ConnectionStateTypes {
  Disconnected = 'Disconnected',
  SearchingForDigitalPerson = 'SearchingForDigitalPerson',
  DownloadingAssets = 'DownloadingAssets',
  ConnectingToDigitalPerson = 'ConnectingToDigitalPerson',
  Connected = 'Connected',
}

let onCardChangedCallback: (data: ContentCard[]) => void;
let triggerDisconnectEvent: () => void;

let onConversationStateUpdatedCallback: (data: ConversationStateTypes) => void;
let onConnectionStateUpdatedCallback: (data: ConnectionStateTypes) => void;

const persona = {
  conversationSend: vi.fn(),
} as unknown as SDKPersona;

const scene = {
  startVideo: vi.fn(),
  connect: vi.fn(),
  disconnect: vi.fn(),
  autoClearCards: vi.fn(),
  isConnected: vi.fn(),
  isMicrophoneActive: vi.fn(() => false),
  isCameraActive: vi.fn(() => false),
  setMediaDeviceActive: vi.fn(),
  onDisconnectedEvent: {
    addListener: (fn: () => void) => {
      triggerDisconnectEvent = fn;
    },
    call: vi.fn(() => {
      triggerDisconnectEvent();
    }),
  },
  videoElement: {
    srcObject: 'mock video src',
  },
  connectionState: {
    getConnectionState: vi.fn(() => ({
      name: 'mock name',
      percentageLoaded: 0,
      totalSteps: 4,
    })),
    onConnectionStateUpdated: {
      addListener: (cb: () => void) => {
        onConnectionStateUpdatedCallback = cb;
      },
      call: vi.fn((data: ConnectionStateTypes) => {
        onConnectionStateUpdatedCallback(data);
      }),
    },
  },
  conversation: {
    onConversationStateUpdated: {
      addListener: (cb: () => void) => {
        onConversationStateUpdatedCallback = cb;
      },
      call: vi.fn((data: ConversationStateTypes) => {
        onConversationStateUpdatedCallback(data);
      }),
    },
    onCardChanged: {
      addListener: (cb: () => void) => {
        onCardChangedCallback = cb;
      },
      call: vi.fn((data: ContentCard[]) => {
        onCardChangedCallback(data);
      }),
    },
  },
} as unknown as SDKScene;

const Scene = vi.fn(() => scene);
const Persona = vi.fn(() => persona);

export { Scene, Persona, ConversationStateTypes };

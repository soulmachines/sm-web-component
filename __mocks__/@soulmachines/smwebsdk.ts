import { ContentCard, Persona as SDKPersona, Scene as SDKScene } from '@soulmachines/smwebsdk';

//copy ConversationStateTypes from smwebsdk here to avoid loop reference
enum ConversationStateTypes {
  dpSpeaking = 'dpSpeaking',
  userSpeaking = 'userSpeaking',
  dpProcessing = 'dpProcessing',
  idle = 'idle',
}

enum ConnectionStateTypes {
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
  conversationSend: jest.fn(),
} as unknown as SDKPersona;

const scene = {
  startVideo: jest.fn(),
  connect: jest.fn(),
  disconnect: jest.fn(),
  autoClearCards: jest.fn(),
  isConnected: jest.fn(),
  isMicrophoneActive: jest.fn(() => false),
  isCameraActive: jest.fn(() => false),
  setMediaDeviceActive: jest.fn(),
  onDisconnectedEvent: {
    addListener: (fn: () => void) => {
      triggerDisconnectEvent = fn;
    },
    call: jest.fn(() => {
      triggerDisconnectEvent();
    }),
  },
  videoElement: {
    srcObject: 'mock video src',
  },
  onConnectionStateUpdated: {
    addListener: (cb: () => void) => {
      onConnectionStateUpdatedCallback = cb;
    },
    call: jest.fn((data: ConnectionStateTypes) => {
      onConnectionStateUpdatedCallback(data);
    }),
  },
  conversation: {
    onConversationStateUpdated: {
      addListener: (cb: () => void) => {
        onConversationStateUpdatedCallback = cb;
      },
      call: jest.fn((data: ConversationStateTypes) => {
        onConversationStateUpdatedCallback(data);
      }),
    },
    onCardChanged: {
      addListener: (cb: () => void) => {
        onCardChangedCallback = cb;
      },
      call: jest.fn((data: ContentCard[]) => {
        onCardChangedCallback(data);
      }),
    },
  },
} as unknown as SDKScene;

const Scene = jest.fn(() => scene);
const Persona = jest.fn(() => persona);

export { Scene, Persona, ConversationStateTypes };

import { ContentCard, Persona as SDKPersona, Scene as SDKScene } from '@soulmachines/smwebsdk';
import { ConversationStatusTypes } from '../../src/enums';

let onCardChangedCallback: (data: ContentCard[]) => void;
let triggerDisconnectEvent: () => void;
let onConversationStatusChangedCallback: (data: ConversationStatusTypes) => void;

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
  conversation: {
    onConversationStatusChanged: {
      addListener: (cb: () => void) => {
        onConversationStatusChangedCallback = cb;
      },
      call: jest.fn((data: ConversationStatusTypes) => {
        onConversationStatusChangedCallback(data);
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

export { Scene, Persona };

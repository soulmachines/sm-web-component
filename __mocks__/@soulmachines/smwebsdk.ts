import {
  ContentCard,
  SpeechMarkerResponseBody,
  Persona as SDKPersona,
  Scene as SDKScene,
} from '@soulmachines/smwebsdk';

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
let onSpeechMarkerEventsCallback: (persona: SDKPersona, message: SpeechMarkerResponseBody) => void;
let triggerDisconnectEvent: () => void;

let onConversationStateUpdatedCallback: (data: ConversationStateTypes) => void;
let onConnectionStateUpdatedCallback: (data: ConnectionStateTypes) => void;

const persona = {
  conversationSend: jest.fn(),
} as unknown as SDKPersona;

const scene = {
  currentPersonaId: 1,
  startVideo: jest.fn(),
  connect: jest.fn(),
  disconnect: jest.fn(),
  autoClearCards: jest.fn(),
  isConnected: jest.fn(),
  isMicrophoneActive: jest.fn(() => false),
  isCameraActive: jest.fn(() => false),
  setMediaDeviceActive: jest.fn(),
  setLogging: jest.fn(),
  setMinLogLevel: jest.fn(),
  onDisconnectedEvent: {
    addListener: (fn: () => void) => {
      triggerDisconnectEvent = fn;
    },
    removeListener: jest.fn(),
    call: jest.fn(() => {
      triggerDisconnectEvent();
    }),
  },

  onSpeechMarkerEvents: {
    '1': {
      addListener: (cb: () => void) => {
        onSpeechMarkerEventsCallback = cb;
      },
      call: jest.fn((persona: SDKPersona, message: SpeechMarkerResponseBody) => {
        onSpeechMarkerEventsCallback(persona, message);
      }),
    },
  },

  videoElement: {
    srcObject: 'mock video src',
  },
  connectionState: {
    getConnectionState: jest.fn(() => ({
      name: 'mock name',
      percentageLoaded: 0,
      totalSteps: 4,
    })),
    onConnectionStateUpdated: {
      addListener: (cb: () => void) => {
        onConnectionStateUpdatedCallback = cb;
      },
      removeListener: jest.fn(),
      call: jest.fn((data: ConnectionStateTypes) => {
        onConnectionStateUpdatedCallback(data);
      }),
    },
  },
  contentAwareness: {
    setLogging: jest.fn(),
    setMinLogLevel: jest.fn(),
  },
  conversation: {
    onConversationStateUpdated: {
      addListener: (cb: () => void) => {
        onConversationStateUpdatedCallback = cb;
      },
      removeListener: jest.fn(),
      call: jest.fn((data: ConversationStateTypes) => {
        onConversationStateUpdatedCallback(data);
      }),
    },
    onCardChanged: {
      addListener: (cb: () => void) => {
        onCardChangedCallback = cb;
      },
      removeListener: jest.fn(),
      call: jest.fn((data: ContentCard[]) => {
        onCardChangedCallback(data);
      }),
    },
  },
} as unknown as SDKScene;

const Scene = jest.fn(() => scene);
const Persona = jest.fn(() => persona);

export { Scene, Persona, ConversationStateTypes };

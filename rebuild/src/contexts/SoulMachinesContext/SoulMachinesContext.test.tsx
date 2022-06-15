import { Scene, Persona } from '@soulmachines/smwebsdk';
import { fireEvent, render } from '@testing-library/preact';
import { SoulMachinesProvider, useSoulMachines } from '.';
import { useConnection } from '../../hooks/useConnection';

const mockConnect = jest.fn();
const mockScene = {
  scene: 'mock',
  conversation: {
    autoClearCards: jest.fn(),
  },
};
const mockPersona = {
  conversationSend: jest.fn(),
};
jest.mock('@soulmachines/smwebsdk', () => ({
  Scene: jest.fn(() => mockScene),
  Persona: jest.fn(() => mockPersona),
}));
jest.mock('../../hooks/useConnection', () => ({
  useConnection: jest.fn(() => ({ connect: mockConnect })),
}));

describe('<SoulMachinesProvider />', () => {
  const apiKey = 'mock api key';
  const tokenServer = 'mock token server';

  const customRender = () =>
    render(
      <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
        <p>mock child</p>
      </SoulMachinesProvider>,
    );

  it('creates a Scene once', () => {
    customRender();
    expect(Scene).toHaveBeenCalledTimes(1);
  });

  it('creates a Persona passing in the scene and persona id', () => {
    customRender();
    expect(Persona).toHaveBeenCalledWith(mockScene, 1);
  });

  it('calls useConnect with scene and the token server', () => {
    customRender();
    expect(useConnection).toHaveBeenCalledWith(mockScene, tokenServer);
  });

  it('sets conversation autoClearCards to true', () => {
    expect(mockScene.conversation.autoClearCards).toEqual(true);
  });

  describe('creating a scene', () => {
    beforeEach(() => {
      customRender();
    });

    it('passes in an api key', () => {
      expect(Scene).toHaveBeenCalledWith(
        expect.objectContaining({
          apiKey,
        }),
      );
    });

    it('passes in a video element', () => {
      expect(Scene).toHaveBeenCalledWith(
        expect.objectContaining({
          videoElement: document.createElement('video'),
        }),
      );
    });

    it('passes in false for requested mic/cam devices', () => {
      expect(Scene).toHaveBeenCalledWith(
        expect.objectContaining({
          requestedMediaDevices: {
            camera: false,
            microphone: false,
          },
        }),
      );
    });

    it('passes in false for required mic/cam devices', () => {
      expect(Scene).toHaveBeenCalledWith(
        expect.objectContaining({
          requiredMediaDevices: {
            camera: false,
            microphone: false,
          },
        }),
      );
    });
  });

  describe('sendTextMessage', () => {
    const TestComponent = () => {
      const { sendTextMessage } = useSoulMachines();

      return (
        <button onClick={() => sendTextMessage('test message')}>Trigger send text message</button>
      );
    };

    it('calls persona conversationSend with the text and two empty objects for the optional args', async () => {
      const { getByText } = render(
        <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
          <TestComponent />
        </SoulMachinesProvider>,
      );

      await fireEvent.click(getByText('Trigger send text message'));

      expect(mockPersona.conversationSend).toHaveBeenCalledWith('test message', {}, {});
    });
  });
});

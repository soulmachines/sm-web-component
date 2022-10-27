import { Scene, Persona } from '@soulmachines/smwebsdk';
import { fireEvent, render } from '@testing-library/preact';
import { SoulMachinesProvider, useSoulMachines } from '.';
import { widgetLayout } from '../../enums';
import { useConnection } from '../../hooks/useConnection';
import { useSMMedia } from '../../hooks/useSMMedia';
import { useToggleLayout } from '../../hooks/useToggleLayout';

const mockCanAutoPlayAudio = true;
const mockVideoRef = { current: 'mock' };
const mockConnect = jest.fn();
const mockDisconnect = jest.fn();
const mockSetLayout = jest.fn();

jest.mock('../../hooks/useConnection', () => ({
  useConnection: jest.fn(() => ({
    connect: mockConnect,
    disconnect: mockDisconnect,
    canAutoPlayAudio: mockCanAutoPlayAudio,
    videoRef: mockVideoRef,
  })),
}));
jest.mock('../../hooks/useSMMedia');
jest.mock('../../hooks/useToggleLayout', () => ({
  useToggleLayout: jest.fn(() => ({
    setLayout: mockSetLayout,
  })),
}));

describe('<SoulMachinesProvider />', () => {
  const mockScene = new Scene({});
  const mockPersona = new Persona(mockScene, 1);
  const apiKey = 'mock api key';
  const tokenServer = 'mock token server';
  const initialLayout = widgetLayout.FULL_FRAME;

  const customRender = () =>
    render(
      <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer} initialLayout={initialLayout}>
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

  it('calls useSMMedia with the scene, canAutoPlayVideo and the videoRef', () => {
    customRender();
    expect(useSMMedia).toHaveBeenCalledWith({
      scene: mockScene,
      canAutoPlayAudio: mockCanAutoPlayAudio,
      videoRef: mockVideoRef,
    });
  });

  it('calls useToggleLayout with initialLayout', () => {
    customRender();
    expect(useToggleLayout).toHaveBeenCalledWith(initialLayout);
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

  describe('enableDebugLogging', () => {
    it('calls scene setLogging and set minimal log level to "debug" with enabled to be true', async () => {
      const EnableLoggingComponent = () => {
        const { enableDebugLogging } = useSoulMachines();
        return <button onClick={() => enableDebugLogging(true)}>Enable Logging</button>;
      };

      const { getByText } = render(
        <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
          <EnableLoggingComponent />
        </SoulMachinesProvider>,
      );

      await fireEvent.click(getByText('Enable Logging'));

      expect(mockScene.setLogging).toHaveBeenCalledWith(true);
      expect(mockScene.contentAwareness?.setLogging).toHaveBeenCalledWith(true);
      expect(mockScene.setMinLogLevel).toHaveBeenCalledWith('debug');
      expect(mockScene.contentAwareness?.setMinLogLevel).toHaveBeenCalledWith('debug');
    });

    it('calls scene setLogging with enabled to be false', async () => {
      const DisableLoggingComponent = () => {
        const { enableDebugLogging } = useSoulMachines();
        return <button onClick={() => enableDebugLogging(false)}>Disable Logging</button>;
      };

      const { getByText } = render(
        <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
          <DisableLoggingComponent />
        </SoulMachinesProvider>,
      );

      await fireEvent.click(getByText('Disable Logging'));

      expect(mockScene.setLogging).toHaveBeenCalledWith(false);
      expect(mockScene.contentAwareness?.setLogging).toHaveBeenCalledWith(false);
    });
  });

  describe('when disconnect is called', () => {
    const TestComponent = () => {
      const { disconnect } = useSoulMachines();
      return <button onClick={() => disconnect()}>Trigger disconnect</button>;
    };

    const initialLayout = widgetLayout.FULL_FRAME;

    it('calls disconnect in useConnection', async () => {
      const { getByText } = render(
        <SoulMachinesProvider
          apiKey={apiKey}
          tokenServer={tokenServer}
          initialLayout={initialLayout}
        >
          <TestComponent />
        </SoulMachinesProvider>,
      );
      await fireEvent.click(getByText('Trigger disconnect'));
      expect(mockDisconnect).toHaveBeenCalledTimes(1);
    });

    it('calls setLayout with the initial layout', async () => {
      const { getByText } = render(
        <SoulMachinesProvider
          apiKey={apiKey}
          tokenServer={tokenServer}
          initialLayout={initialLayout}
        >
          <TestComponent />
        </SoulMachinesProvider>,
      );
      await fireEvent.click(getByText('Trigger disconnect'));
      expect(mockSetLayout).toHaveBeenCalledWith(initialLayout);
    });
  });
});

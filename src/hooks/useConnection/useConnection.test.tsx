import { Scene } from '@soulmachines/smwebsdk';
import { act, renderHook } from '@testing-library/react-hooks';
import { useConnection } from '.';
import { ConnectionStatus, SessionDataKeys } from '../../enums';

const mockPlay = jest.fn(() => Promise.resolve(true));
const mockMediaSrc = {} as unknown as MediaSource;
jest.mock('@soulmachines/smwebsdk');
const reactVideoEl = {
  muted: true,
  play: mockPlay,
  srcObject: mockMediaSrc,
};
jest.mock('preact/hooks', () => ({
  ...jest.requireActual('preact/hooks'),
  useRef: () => ({ current: reactVideoEl }),
}));

describe('useConnection()', () => {
  const mockScene = new Scene();
  const tokenServer = 'mock token server';
  const mockFetch = jest.fn();
  const customRender = (scene = mockScene) => renderHook(() => useConnection(scene, tokenServer));

  beforeEach(() => {
    window.fetch = mockFetch;
  });

  it('returns a connect function', () => {
    const { result } = customRender();
    expect(typeof result.current.connect).toEqual('function');
  });

  it('returns connectionStatus defaulted to disconnected', () => {
    const { result } = customRender();
    expect(result.current.connectionStatus).toEqual(ConnectionStatus.DISCONNECTED);
  });

  it('returns connectionError defaulted to null', () => {
    const { result } = customRender();
    expect(result.current.connectionError).toEqual(null);
  });

  describe('when disconnect is called', () => {
    it('calls scene.disconnect', () => {
      const { result } = customRender();
      result.current.disconnect();
      expect(mockScene.disconnect).toBeCalledTimes(1);
    });

    it('updates video srcObject to null', async () => {
      const { result } = customRender();
      const mockStream = 'mock stream' as unknown as MediaSource;
      reactVideoEl.srcObject = mockStream;

      result.current.disconnect();

      expect(reactVideoEl.srcObject).toBeNull();
    });

    it('clears session storage data', () => {
      const { result } = customRender();

      sessionStorage.setItem(SessionDataKeys.sessionId, 'mock-value');
      sessionStorage.setItem(SessionDataKeys.apiKey, 'mock-value');
      sessionStorage.setItem(SessionDataKeys.server, 'mock-value');
      sessionStorage.setItem(SessionDataKeys.cameraEnabled, 'true');
      sessionStorage.setItem(SessionDataKeys.microphoneEnabled, 'false');
      sessionStorage.setItem(SessionDataKeys.videoMuted, 'true');

      result.current.disconnect();

      expect(sessionStorage.getItem(SessionDataKeys.sessionId)).toBeNull();
      expect(sessionStorage.getItem(SessionDataKeys.apiKey)).toBeNull();
      expect(sessionStorage.getItem(SessionDataKeys.server)).toBeNull();
      expect(sessionStorage.getItem(SessionDataKeys.cameraEnabled)).toBeNull();
      expect(sessionStorage.getItem(SessionDataKeys.microphoneEnabled)).toBeNull();
      expect(sessionStorage.getItem(SessionDataKeys.videoMuted)).toBeNull();
    });
  });

  describe('when request is pending', () => {
    beforeEach(() => {
      const mockedFetchResponse = { json: () => new Promise(() => null) };
      mockFetch.mockReturnValue(mockedFetchResponse);
    });

    it('updates the connection status to connecting', () => {
      const { result } = renderHook(() => useConnection(mockScene, undefined));

      act(() => {
        result.current.connect();
      });

      expect(result.current.connectionStatus).toEqual(ConnectionStatus.CONNECTING);
    });

    it('updates the connection status to disconnected when disconnect is called', async () => {
      const { result } = customRender();

      act(() => {
        result.current.connect();
        result.current.disconnect();
      });

      expect(result.current.connectionStatus).toEqual(ConnectionStatus.DISCONNECTED);
    });

    describe('when a timeout occurs', () => {
      const customRender = () => {
        const testUtils = renderHook(() => useConnection(mockScene, undefined));

        act(() => {
          testUtils.result.current.connect();
          mockScene.onDisconnectedEvent.call();
        });

        return testUtils;
      };

      it('updates the connection status to timed out', () => {
        const { result } = customRender();
        expect(result.current.connectionStatus).toEqual(ConnectionStatus.TIMED_OUT);
      });
    });
  });

  describe('when token server is undefined', () => {
    beforeEach(async () => {
      const { result } = renderHook(() => useConnection(mockScene, undefined));
      await result.current.connect();
    });

    it('calls scene.connect once with an empty object', () => {
      expect(mockScene.connect).toHaveBeenCalledWith({});
      expect(mockScene.connect).toHaveBeenCalledTimes(1);
    });

    it('calls scene.startVideo', () => {
      expect(mockScene.connect).toHaveBeenCalledTimes(1);
    });
  });

  describe('when token server is defined', () => {
    const mockCreds = { url: 'mock url', jwt: 'mock jwt' };
    const mockedFetchResponse = { json: () => Promise.resolve(mockCreds) };

    describe('when the calls are successful', () => {
      beforeEach(() => {
        mockFetch.mockReturnValue(mockedFetchResponse);
      });

      it('sets video muted to false', () => {
        customRender();
        expect(reactVideoEl.muted).toEqual(false);
      });

      it('sets canAutoPlayAudio to true', async () => {
        const { result, waitForNextUpdate } = customRender();
        await result.current.connect();
        await waitForNextUpdate();

        expect(result.current.canAutoPlayAudio).toEqual(true);
      });

      it('calls scene.connect once with an object containing the token server creds', async () => {
        const { result } = customRender();
        await result.current.connect();

        expect(fetch).toHaveBeenCalledWith(tokenServer);
        expect(mockScene.connect).toHaveBeenCalledWith({
          tokenServer: { uri: mockCreds.url, token: mockCreds.jwt },
        });
        expect(mockScene.connect).toHaveBeenCalledTimes(1);
      });

      it('calls scene.startVideo', async () => {
        const { result } = customRender();
        await result.current.connect();
        expect(mockScene.connect).toHaveBeenCalledTimes(1);
      });

      it('updates the connection status to connected', async () => {
        const { result, waitForNextUpdate } = customRender();
        await result.current.connect();
        await waitForNextUpdate();

        expect(result.current.connectionStatus).toEqual(ConnectionStatus.CONNECTED);
      });

      it('updates connectionError to null', async () => {
        const { result, waitForNextUpdate } = customRender();
        await result.current.connect();
        await waitForNextUpdate();

        expect(result.current.connectionError).toEqual(null);
      });

      it('updates the connection status to disconnected when disconnect is called', async () => {
        const { result } = customRender();
        await result.current.connect();

        act(() => {
          result.current.disconnect();
        });

        expect(result.current.connectionStatus).toEqual(ConnectionStatus.DISCONNECTED);
      });

      describe('when a timeout occurs', () => {
        const customRender = async () => {
          const testUtils = renderHook(() => useConnection(mockScene, tokenServer));
          await testUtils.result.current.connect();
          await testUtils.waitForNextUpdate();

          act(() => {
            mockScene.onDisconnectedEvent.call();
          });

          return testUtils;
        };

        it('updates the connection status to timed out', async () => {
          const { result } = await customRender();
          expect(result.current.connectionStatus).toEqual(ConnectionStatus.TIMED_OUT);
        });
      });
    });

    describe('when video.play() errors', () => {
      beforeEach(() => {
        mockFetch.mockReturnValue(mockedFetchResponse);
        mockPlay?.mockRejectedValue('User interaction required');
      });

      it('sets canAutoPlayAudio to false', async () => {
        const { result } = customRender();
        await result.current.connect();
        expect(result.current.canAutoPlayAudio).toEqual(false);
      });
    });

    describe('when video is undefined', () => {
      beforeEach(() => {
        mockFetch.mockReturnValue(mockedFetchResponse);
      });

      it('sets canAutoPlayAudio to false', async () => {
        const { result } = customRender({
          ...mockScene,
          videoElement: undefined,
        } as unknown as Scene);

        await result.current.connect();
        expect(result.current.canAutoPlayAudio).toEqual(false);
      });
    });

    describe('when an error occurs', () => {
      const error = new Error('Boom');

      beforeEach(() => {
        mockFetch.mockRejectedValue(error);
      });

      it('updates connectionError with the error', async () => {
        const { result, waitForNextUpdate } = customRender();

        await result.current.connect();
        await waitForNextUpdate();

        expect(result.current.connectionError).toEqual(error);
      });

      it('updates connection status to errored', async () => {
        const { result, waitForNextUpdate } = customRender();

        await result.current.connect();
        await waitForNextUpdate();

        expect(result.current.connectionStatus).toEqual(ConnectionStatus.ERRORED);
      });

      it('clears session storage data', async () => {
        const { result } = customRender();
        await result.current.connect();

        expect(sessionStorage.getItem(SessionDataKeys.sessionId)).toBeNull();
        expect(sessionStorage.getItem(SessionDataKeys.apiKey)).toBeNull();
        expect(sessionStorage.getItem(SessionDataKeys.server)).toBeNull();
        expect(sessionStorage.getItem(SessionDataKeys.cameraEnabled)).toBeNull();
        expect(sessionStorage.getItem(SessionDataKeys.microphoneEnabled)).toBeNull();
      });
    });
  });
});

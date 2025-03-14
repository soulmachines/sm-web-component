import { Scene } from '@soulmachines/smwebsdk';
import { fireEvent, renderHook, act, waitFor } from '@testing-library/preact';
import 'preact/hooks';
import { useConnection } from '.';
import { ConnectionStatus, SessionDataKeys } from '../../enums';

const mockLoad = jest.fn();
const mockMediaSrc = {} as unknown as MediaSource;
const reactVideoEl = {
  muted: true,
  load: mockLoad,
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

    it('updates video srcObject to null', () => {
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

    it('updates the connection status to disconnected when disconnect is called', () => {
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
    beforeEach(() => {
      const { result } = renderHook(() => useConnection(mockScene, undefined));
      result.current.connect();
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

      it('calls scene.connect once with an object containing the token server creds', async () => {
        const { result } = customRender();
        result.current.connect();

        await waitFor(() => {
          expect(fetch).toHaveBeenCalledWith(tokenServer);
          expect(mockScene.connect).toHaveBeenCalledWith({
            tokenServer: { uri: mockCreds.url, token: mockCreds.jwt },
          });
          expect(mockScene.connect).toHaveBeenCalledTimes(1);
        });
      });

      it('calls loadVideo on the video ref', () => {
        const { result } = customRender();
        result.current.connect();
        expect(mockLoad).toHaveBeenCalledTimes(1);
      });

      it('updates the connection status to connected', async () => {
        const { result } = customRender();
        result.current.connect();

        await waitFor(() => {
          expect(result.current.connectionStatus).toEqual(ConnectionStatus.CONNECTED);
        });
      });

      it('updates connectionError to null', async () => {
        const { result } = customRender();
        result.current.connect();

        await waitFor(() => {
          expect(result.current.connectionError).toEqual(null);
        });
      });

      it('updates the connection status to disconnected when disconnect is called', () => {
        const { result } = customRender();
        result.current.connect();

        act(() => {
          result.current.disconnect();
        });

        expect(result.current.connectionStatus).toEqual(ConnectionStatus.DISCONNECTED);
      });

      it('removes the disconnected event listener when component is unmounted', () => {
        const { unmount } = customRender();

        unmount();

        expect(mockScene.onDisconnectedEvent.removeListener).toBeCalledWith(expect.any(Function));
      });

      describe('when a timeout occurs', () => {
        const customRender = async () => {
          const testUtils = renderHook(() => useConnection(mockScene, tokenServer));
          testUtils.result.current.connect();

          waitFor(() => {
            act(() => {
              mockScene.onDisconnectedEvent.call();
            });
          });

          return testUtils;
        };

        it('updates the connection status to timed out', async () => {
          const { result } = await customRender();
          expect(result.current.connectionStatus).toEqual(ConnectionStatus.TIMED_OUT);
        });
      });
    });

    describe('when an error occurs', () => {
      const error = new Error('Boom');

      beforeEach(() => {
        mockFetch.mockRejectedValue(error);
      });

      it('updates connectionError with the error', async () => {
        const { result } = customRender();

        result.current.connect();

        waitFor(() => {
          expect(result.current.connectionError).toEqual(error);
        });
      });

      it('updates connection status to errored', async () => {
        const { result } = customRender();

        result.current.connect();

        waitFor(() => {
          expect(result.current.connectionStatus).toEqual(ConnectionStatus.ERRORED);
        });
      });

      it('clears session storage data', () => {
        const { result } = customRender();
        result.current.connect();

        expect(sessionStorage.getItem(SessionDataKeys.sessionId)).toBeNull();
        expect(sessionStorage.getItem(SessionDataKeys.apiKey)).toBeNull();
        expect(sessionStorage.getItem(SessionDataKeys.server)).toBeNull();
        expect(sessionStorage.getItem(SessionDataKeys.cameraEnabled)).toBeNull();
        expect(sessionStorage.getItem(SessionDataKeys.microphoneEnabled)).toBeNull();
      });
    });
  });

  describe('when pageshow event is fired', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'location', {
        configurable: true,
        value: { reload: jest.fn() },
      });
    });

    afterAll(() => {
      Object.defineProperty(window, 'location', { configurable: true, value: window.location });
    });

    it('reloads the page if the current page is from bfcache', () => {
      customRender();
      fireEvent(window, new PageTransitionEvent('pageshow', { persisted: true }));
      expect(window.location.reload).toHaveBeenCalled();
    });

    it('does not reload the page if the current page is newly loaded', () => {
      customRender();
      fireEvent(window, new PageTransitionEvent('pageshow', { persisted: false }));
      expect(window.location.reload).not.toHaveBeenCalled();
    });

    it('removes the pageshow event listener when the component unmounts', () => {
      const { unmount } = customRender();

      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
      unmount();

      expect(removeEventListenerSpy).toBeCalledWith('pageshow', expect.any(Function));
    });
  });
});

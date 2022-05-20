import { Scene } from '@soulmachines/smwebsdk';
import { act, renderHook } from '@testing-library/react-hooks';
import { useConnection } from '.';
import { ConnectionStatus } from './useConnection';

let triggerDisconnectEvent: () => void;
const mockScene = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  onDisconnectedEvent: {
    addListener: (fn: () => void) => {
      triggerDisconnectEvent = fn;
    },
  },
  call: () => null,
} as unknown as Scene;
jest.mock('@soulmachines/smwebsdk', () => ({
  Scene: jest.fn(() => mockScene),
}));

describe('useConnection()', () => {
  const tokenServer = 'mock token server';
  const mockFetch = jest.fn();
  const customRender = () => renderHook(() => useConnection(mockScene, tokenServer));

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

  it('calls scene.disconnect when disconnect is called', () => {
    const { result } = customRender();
    result.current.disconnect();
    expect(mockScene.disconnect).toBeCalledTimes(1);
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
          triggerDisconnectEvent();
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
    it('calls scene.connect once with an empty object', async () => {
      const { result } = renderHook(() => useConnection(mockScene, undefined));

      await result.current.connect();

      expect(mockScene.connect).toHaveBeenCalledWith({});
      expect(mockScene.connect).toHaveBeenCalledTimes(1);
    });
  });

  describe('when token server is defined', () => {
    describe('when the calls are successful', () => {
      const mockCreds = { url: 'mock url', jwt: 'mock jwt' };
      const mockedFetchResponse = { json: () => Promise.resolve(mockCreds) };

      beforeEach(() => {
        mockFetch.mockReturnValue(mockedFetchResponse);
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

      it('updates the connection status to connected', async () => {
        const { result } = customRender();
        await result.current.connect();

        expect(result.current.connectionStatus).toEqual(ConnectionStatus.CONNECTED);
      });

      it('updates connectionError to null', async () => {
        const { result } = customRender();
        await result.current.connect();

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

          act(() => {
            triggerDisconnectEvent();
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

        await result.current.connect();
        expect(result.current.connectionError).toEqual(error);
      });

      it('updates connection status to errored', async () => {
        const { result } = customRender();
        await result.current.connect();

        expect(result.current.connectionStatus).toEqual(ConnectionStatus.ERRORED);
      });
    });
  });
});

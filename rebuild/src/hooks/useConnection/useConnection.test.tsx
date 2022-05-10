import { Scene } from '@soulmachines/smwebsdk';
import { act, renderHook } from '@testing-library/react-hooks';
import { useConnection } from '.';

const mockScene = { connect: jest.fn(), disconnect: jest.fn() } as unknown as Scene;
jest.mock('@soulmachines/smwebsdk', () => ({
  Scene: jest.fn(() => mockScene),
}));

describe('useConnection()', () => {
  const tokenServer = 'mock token server';
  const mockFetch = jest.fn();

  beforeEach(() => {
    window.fetch = mockFetch;
  });

  it('returns a connect function', () => {
    const { result } = renderHook(() => useConnection(mockScene, tokenServer));
    expect(typeof result.current.connect).toEqual('function');
  });

  it('returns isConnected defaulted to false', () => {
    const { result } = renderHook(() => useConnection(mockScene, tokenServer));
    expect(result.current.isConnected).toEqual(false);
  });

  it('returns connectionError defaulted to null', () => {
    const { result } = renderHook(() => useConnection(mockScene, tokenServer));
    expect(result.current.connectionError).toEqual(null);
  });

  it('returns isConnecting defaulted to false', () => {
    const { result } = renderHook(() => useConnection(mockScene, tokenServer));
    expect(result.current.isConnecting).toEqual(false);
  });

  it('calls scene.disconnect when disconnect is called', () => {
    const { result } = renderHook(() => useConnection(mockScene, tokenServer));
    result.current.disconnect();
    expect(mockScene.disconnect).toBeCalledTimes(1);
  });

  describe('when request is pending', () => {
    beforeEach(() => {
      const mockedFetchResponse = { json: () => new Promise(() => null) };
      mockFetch.mockReturnValue(mockedFetchResponse);
    });

    it('updates isConnecting to true when a request is pending', () => {
      const { result } = renderHook(() => useConnection(mockScene, undefined));

      act(() => {
        result.current.connect();
      });

      expect(result.current.isConnecting).toEqual(true);
    });

    it('sets isConnecting to false when disconnect is called', async () => {
      const { result } = renderHook(() => useConnection(mockScene, tokenServer));

      act(() => {
        result.current.connect();
        result.current.disconnect();
      });

      expect(result.current.isConnecting).toEqual(false);
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
        const { result } = renderHook(() => useConnection(mockScene, tokenServer));
        await result.current.connect();

        expect(fetch).toHaveBeenCalledWith(tokenServer);
        expect(mockScene.connect).toHaveBeenCalledWith({
          tokenServer: { uri: mockCreds.url, token: mockCreds.jwt },
        });
        expect(mockScene.connect).toHaveBeenCalledTimes(1);
      });

      it('updates isConnected to true', async () => {
        const { result } = renderHook(() => useConnection(mockScene, tokenServer));
        await result.current.connect();

        expect(result.current.isConnected).toEqual(true);
      });

      it('updates isConnecting to false', async () => {
        const { result } = renderHook(() => useConnection(mockScene, tokenServer));
        await result.current.connect();

        expect(result.current.isConnecting).toEqual(false);
      });

      it('updates connectionError to null', async () => {
        const { result } = renderHook(() => useConnection(mockScene, tokenServer));
        await result.current.connect();

        expect(result.current.connectionError).toEqual(null);
      });

      it('sets isConnected to false when disconnect is called', async () => {
        const { result } = renderHook(() => useConnection(mockScene, tokenServer));
        await result.current.connect();

        act(() => {
          result.current.disconnect();
        });

        expect(result.current.isConnected).toEqual(false);
      });
    });

    describe('when an error occurs', () => {
      const error = new Error('Boom');

      beforeEach(() => {
        mockFetch.mockRejectedValue(error);
      });

      it('updates connectionError with the error', async () => {
        const { result } = renderHook(() => useConnection(mockScene, tokenServer));

        await result.current.connect();
        expect(result.current.connectionError).toEqual(error);
      });

      it('updates isConnected to false', async () => {
        const { result } = renderHook(() => useConnection(mockScene, tokenServer));
        await result.current.connect();

        expect(result.current.isConnected).toEqual(false);
      });

      it('updates isConnecting to false', async () => {
        const { result } = renderHook(() => useConnection(mockScene, tokenServer));
        await result.current.connect();

        expect(result.current.isConnecting).toEqual(false);
      });
    });
  });
});

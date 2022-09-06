import { Scene, ConnectionStateTypes } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useConnectionState } from '.';

jest.mock('@soulmachines/smwebsdk');

describe('useConnectionState()', () => {
  const scene = new Scene();

  it('returns the connection state, defaulted to disconnected', () => {
    const { result } = renderHook(() => useConnectionState(scene));
    expect(result.current.connectionState).toEqual(ConnectionStateTypes.Disconnected);
  });

  describe('when onConnectionStateUpdated fires', () => {
    it('updates the state to the state received from the event', () => {
      const { result, rerender } = renderHook(() => useConnectionState(scene));
      scene.connectionState.onConnectionStateUpdated.call(ConnectionStateTypes.DownloadingAssets);

      rerender();

      expect(result.current.connectionState).toEqual(ConnectionStateTypes.dpSpeaking);
    });
  });
});

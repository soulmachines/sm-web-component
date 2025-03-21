import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/preact';
import { useConnectionState } from '.';

describe('useConnectionState()', () => {
  const scene = new Scene();

  it('returns the connection state defaulted to the first step', () => {
    const { result } = renderHook(() => useConnectionState(scene));
    expect(result.current.connectionState).toEqual({
      name: 'mock name',
      percentageLoaded: 0,
      totalSteps: 4,
    });
  });

  it('removes the event listener when component is unmounted', () => {
    const { unmount } = renderHook(() => useConnectionState(scene));

    unmount();

    expect(scene.connectionState.onConnectionStateUpdated.removeListener).toBeCalledWith(
      expect.any(Function),
    );
  });

  describe('when onConnectionStateUpdated fires', () => {
    it('updates the state to the state received from the event', () => {
      const mockData = {};
      const { result, rerender } = renderHook(() => useConnectionState(scene));
      scene.connectionState.onConnectionStateUpdated.call(mockData);

      rerender();

      expect(result.current.connectionState).toEqual(mockData);
    });
  });
});

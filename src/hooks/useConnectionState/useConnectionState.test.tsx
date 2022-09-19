import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
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

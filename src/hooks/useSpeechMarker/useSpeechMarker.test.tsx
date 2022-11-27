import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useSpeechMarker } from './useSpeechMarker';

describe('useSpeechMarker', () => {
  const mockScene = new Scene();
  const customRender = (scene = mockScene, personaId = 1) =>
    renderHook(() => useSpeechMarker(scene, personaId));

  it('adds listener to scene onSpeechMarkerEvents', () => {
    const { result, rerender } = customRender();
    rerender();
    expect(result.current.featureMarkers).toEqual(['layout', 'fullframe']);
  });
});

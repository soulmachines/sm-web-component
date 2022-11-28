import { Persona, Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useSpeechMarker } from './useSpeechMarker';

describe('useSpeechMarker', () => {
  const mockScene = new Scene();
  const mockPersona = new Persona(mockScene, 1);
  const customRender = (scene = mockScene, personaId = 1) =>
    renderHook(() => useSpeechMarker(scene, personaId));

  it('adds listener to scene onSpeechMarkerEvents', () => {
    const { result, rerender } = customRender();
    let speechMarkerMessage = ['layout', 'fullframe'];
    mockScene.onSpeechMarkerEvents[0].call(mockPersona, speechMarkerMessage);
    rerender();
    expect(result.current.featureMarkers).toEqual(speechMarkerMessage);
  });
});

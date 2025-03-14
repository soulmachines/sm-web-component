import { Persona, Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/preact';
import { useSpeechMarker } from './useSpeechMarker';

describe('useSpeechMarker', () => {
  const mockScene = new Scene();
  const mockPersona = new Persona(mockScene, 1);
  const customRender = (scene = mockScene) => renderHook(() => useSpeechMarker(scene));

  it('updates featureMarkers when scene onSpeechMarkerEvents is called with speechMarkerMessage name "feature"', () => {
    const { result, rerender } = customRender();
    const speechMarkerMessage = { name: 'feature', arguments: ['layout', 'fullframe'] };
    mockScene.onSpeechMarkerEvents['1'].call(mockPersona, speechMarkerMessage);
    rerender();
    expect(result.current.featureMarkers).toEqual({
      command: speechMarkerMessage.arguments[0],
      value: speechMarkerMessage.arguments[1],
    });
  });

  it('does not update featureMarkers when scene onSpeechMarkerEvents is called with speechMarkerMessage name not "feature"', () => {
    const { result, rerender } = customRender();
    const speechMarkerMessage1 = { name: 'feature', arguments: ['layout', 'fullframe'] };
    mockScene.onSpeechMarkerEvents['1'].call(mockPersona, speechMarkerMessage1);
    rerender();
    const speechMarkerMessage2 = { name: 'x', arguments: ['x', 'y'] };
    mockScene.onSpeechMarkerEvents['1'].call(mockPersona, speechMarkerMessage2);
    expect(result.current.featureMarkers).toEqual({
      command: speechMarkerMessage1.arguments[0],
      value: speechMarkerMessage1.arguments[1],
    });
  });

  it('removes the handleSpeechMarker listener when component is unmounted', () => {
    const { unmount } = customRender();
    unmount();
    expect(
      mockScene.onSpeechMarkerEvents[mockScene.currentPersonaId].removeListener,
    ).toBeCalledWith(expect.any(Function));
  });
});

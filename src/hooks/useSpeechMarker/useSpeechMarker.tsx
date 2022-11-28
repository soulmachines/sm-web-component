import { Scene, Persona, SpeechMarkerResponseBody } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';
import { speechMarkers } from '../../enums';

function useSpeechMarker(scene: Scene) {
  const [featureMarkers, setFeatureMarkers] = useState(['']);

  useEffect(() => {
    scene.onSpeechMarkerEvents[scene.currentPersonaId].addListener(
      (_: Persona, message: SpeechMarkerResponseBody) => {
        if (message.name === speechMarkers.FEATURE) {
          setFeatureMarkers(message.arguments);
        }
      },
    );
  }, [scene]);

  return {
    featureMarkers,
  };
}

export { useSpeechMarker };

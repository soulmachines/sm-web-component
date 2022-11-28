import { Scene, Persona, SpeechMarkerResponseBody } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';
import { speechMarkers } from '../../enums';

function useSpeechMarker(scene: Scene, personaId: number) {
  const [featureMarkers, setFeatureMarkers] = useState(['']);

  useEffect(() => {
    scene.onSpeechMarkerEvents[personaId].addListener(
      (_: Persona, message: SpeechMarkerResponseBody) => {
        if (message.name === speechMarkers.FEATURE) {
          setFeatureMarkers(message.arguments);
        }
      },
    );
  }, [scene, personaId]);

  return {
    featureMarkers,
  };
}

export { useSpeechMarker };

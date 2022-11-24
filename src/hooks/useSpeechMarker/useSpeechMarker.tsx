import { Scene, Persona, SpeechMarkerResponseBody } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useSpeechMarker(scene: Scene, personaId: number) {
  const [featureMarkers, setFeatureMarkers] = useState(['']);

  useEffect(() => {
    scene.onSpeechMarkerEvents[personaId].addListener(
      (_: Persona, message: SpeechMarkerResponseBody) => {
        const markerName = message.name;
        const markerArguments = message.arguments;
        if (markerName === 'feature') {
          setFeatureMarkers(markerArguments);
        }
      },
    );

    return () => {
      scene.onSpeechMarkerEvents[personaId].removeListener(() => setFeatureMarkers(['']));
    };
  }, [scene, personaId]);

  return {
    featureMarkers,
  };
}

export { useSpeechMarker };

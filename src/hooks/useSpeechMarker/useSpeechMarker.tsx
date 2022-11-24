import { Scene, Persona } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useSpeechMarker(scene: Scene, personaId: number) {
  const [featureMarkers, setFeatureMarkers] = useState([]);

  useEffect(() => {
    scene.onSpeechMarkerEvents[personaId].addListener((_: Persona, message: any) => {
      const markerName = message.name;
      if (markerName === 'feature') {
        setFeatureMarkers(message.arguments);
      }
    });

    return () => {
      scene.onSpeechMarkerEvents[personaId].removeListener((_: Persona, message: any) =>
        setFeatureMarkers([]),
      );
    };
  }, [scene, personaId]);

  return {
    featureMarkers,
  };
}

export { useSpeechMarker };

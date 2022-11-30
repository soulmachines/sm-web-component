import { Scene, Persona, SpeechMarkerResponseBody } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';
import { speechMarkers } from '../../enums';

function useSpeechMarker(scene: Scene) {
  const [featureMarkers, setFeatureMarkers] = useState({});

  const handleSpeechMarker = (_: Persona, message: SpeechMarkerResponseBody) => {
    if (message.name === speechMarkers.FEATURE) {
      setFeatureMarkers({
        command: message.arguments[0],
        value: message.arguments[1],
      });
    }
  };

  useEffect(() => {
    scene.onSpeechMarkerEvents[scene.currentPersonaId].addListener(handleSpeechMarker);
    return () => {
      scene.onSpeechMarkerEvents[scene.currentPersonaId].removeListener(handleSpeechMarker);
    };
  }, [scene]);

  return {
    featureMarkers,
  };
}

export { useSpeechMarker };

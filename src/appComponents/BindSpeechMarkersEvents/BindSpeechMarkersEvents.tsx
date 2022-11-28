import { useEffect } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { speechMarkers, widgetLayout } from '../../enums';

export function BindSpeechMarkersEvents() {
  const { featureMarkers, setLayout } = useSoulMachines();
  useEffect(() => {
    if (featureMarkers.length >= 2) {
      const featureType = featureMarkers[0];

      if (featureType === speechMarkers.LAYOUT) {
        featureMarkers[1] === 'fullFrame' ||
        featureMarkers[1] === 'fullframe' ||
        featureMarkers[1] === 'full frame'
          ? setLayout(widgetLayout.FULL_FRAME)
          : setLayout(widgetLayout.FLOAT);
      }
    }
  }, [featureMarkers, setLayout]);

  return null;
}

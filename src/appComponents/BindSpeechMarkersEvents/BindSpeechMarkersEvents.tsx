import { useCallback, useEffect } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { widgetLayout } from '../../enums';

export function BindSpeechMarkersEvents() {
  const { featureMarkers, setLayout } = useSoulMachines();
  const processFeatures = useCallback(() => {
    if (featureMarkers.length >= 2) {
      const featureType = featureMarkers[0];

      if (featureType === 'layout') {
        featureMarkers[1] === 'fullframe'
          ? setLayout(widgetLayout.FULL_FRAME)
          : setLayout(widgetLayout.FLOAT);
      }
    }
  }, []);

  useEffect(() => {
    processFeatures();
  }, [featureMarkers, processFeatures]);

  return null;
}

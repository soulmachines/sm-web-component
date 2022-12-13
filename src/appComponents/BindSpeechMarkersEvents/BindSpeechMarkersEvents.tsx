import { useEffect } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { speechMarkers, widgetLayout } from '../../enums';

export function BindSpeechMarkersEvents() {
  const { featureMarkers, setLayout } = useSoulMachines();

  useEffect(() => {
    if (featureMarkers.command && featureMarkers.value) {
      if (featureMarkers.command === speechMarkers.LAYOUT) {
        const layouts = {
          fullFrame: widgetLayout.FULL_FRAME,
          float: widgetLayout.FLOAT,
          embedded: widgetLayout.EMBEDDED,
        };
        const selectedLayout: widgetLayout = layouts[featureMarkers.value as widgetLayout];
        if (selectedLayout) {
          setLayout(selectedLayout);
          return;
        }
      }
      console.warn(
        `Speech Marker received with unknown command "${featureMarkers.command}", "${featureMarkers.value}". Please check your spelling`,
      );
    }
  }, [featureMarkers, setLayout]);

  return null;
}

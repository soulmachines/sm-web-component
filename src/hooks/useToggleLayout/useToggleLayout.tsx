import { useState } from 'preact/hooks';
import { widgetLayout } from '../../enums';

function useToggleLayout(initialLayout: widgetLayout) {
  const [layout, setLayout] = useState(initialLayout);
  const toggleLayout = () => {
    if (layout !== widgetLayout.FLOAT) {
      setLayout(widgetLayout.FLOAT);
    } else {
      setLayout(widgetLayout.FULL_FRAME);
    }
  };
  return {
    layout,
    setLayout,
    toggleLayout,
  };
}

export { useToggleLayout };

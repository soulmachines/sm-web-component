import { useState } from 'preact/hooks';
import { LoadingIndicator, LoadingIndicatorProps } from '.';

export default {
  title: `Components / LoadingIndicator`,
  component: LoadingIndicator,
  argTypes: {
    stepName: {
      control: { type: 'text' },
      defaultValue: 'DownloadingAssets',
    },
    progress: {
      control: { type: 'number' },
      defaultValue: 25,
    },
    durationMs: {
      control: { type: 'number' },
      defaultValue: 3000,
    },
  },
};

export const Basic = (props: LoadingIndicatorProps) => <LoadingIndicator {...props} />;

export const Example = () => {
  const defaultState = {
    stepName: 'Idle',
    progress: 0,
  };
  const [progressProps, setProgressProps] = useState(defaultState);

  const startAnimation = () => {
    // Reset state
    setProgressProps(defaultState);

    setTimeout(() => {
      setProgressProps({
        stepName: 'SearchingForDigitalPerson',
        progress: 25,
      });
    }, 500);

    setTimeout(() => {
      setProgressProps({
        stepName: 'DownloadingAssets',
        progress: 50,
      });
    }, 1000);

    setTimeout(() => {
      setProgressProps({
        stepName: 'ConnectingToDigitalPerson',
        progress: 75,
      });
    }, 2000);

    setTimeout(() => {
      setProgressProps({
        stepName: 'Connected',
        progress: 100,
      });
    }, 3500);
  };

  return (
    <div>
      <button onClick={startAnimation}>Start</button>
      <LoadingIndicator {...progressProps} durationMs={3000} />
    </div>
  );
};

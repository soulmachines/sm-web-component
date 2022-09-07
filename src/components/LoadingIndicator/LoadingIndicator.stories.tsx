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
    percentageLoaded: {
      control: { type: 'number' },
      defaultValue: 0,
    },
    totalSteps: {
      control: { type: 'number' },
      defaultValue: 4,
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
    percentageLoaded: 0,
    totalSteps: 3,
  };
  const [progressProps, setProgressProps] = useState(defaultState);

  const startAnimation = () => {
    // Reset state
    setProgressProps(defaultState);

    setTimeout(() => {
      setProgressProps({
        ...defaultState,
        stepName: 'SearchingForDigitalPerson',
        percentageLoaded: 25,
      });
    }, 500);

    setTimeout(() => {
      setProgressProps({
        ...defaultState,
        stepName: 'DownloadingAssets',
        percentageLoaded: 50,
      });
    }, 1000);

    setTimeout(() => {
      setProgressProps({
        ...defaultState,
        stepName: 'ConnectingToDigitalPerson',
        percentageLoaded: 75,
      });
    }, 2000);

    setTimeout(() => {
      setProgressProps({
        ...defaultState,
        stepName: 'Connected',
        percentageLoaded: 100,
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

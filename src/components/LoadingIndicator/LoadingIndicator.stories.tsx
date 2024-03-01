import { useState } from 'preact/hooks';
import { LoadingIndicator, LoadingIndicatorProps } from '.';
import { Button } from '../Button';

export default {
  title: 'Components / LoadingIndicator',
  component: LoadingIndicator,
  argTypes: {
    stepName: {
      control: { type: 'text' },
    },
    percentageLoaded: {
      control: { type: 'number' },
    },
    totalSteps: {
      control: { type: 'number' },
    },
    durationMs: {
      control: { type: 'number' },
    },
  },
  args: {
    stepName: 'DownloadingAssets',
    percentageLoaded: 0,
    totalSteps: 4,
    durationMs: 3000,
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
      <Button onClick={startAnimation}>Start Animation</Button>
      <LoadingIndicator {...progressProps} durationMs={3000} />
    </div>
  );
};

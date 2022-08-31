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
    currentStep: {
      control: { type: 'number' },
      defaultValue: 2,
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
    currentStep: 0,
    totalSteps: 4,
  };
  const [progressProps, setProgressProps] = useState(defaultState);

  const startAnimation = () => {
    // Reset state
    setProgressProps(defaultState);

    setTimeout(() => {
      setProgressProps({
        stepName: 'SearchingForDigitalPerson',
        currentStep: 1,
        totalSteps: 4,
      });
    }, 500);

    setTimeout(() => {
      setProgressProps({
        stepName: 'DownloadingAssets',
        currentStep: 2,
        totalSteps: 4,
      });
    }, 1000);

    setTimeout(() => {
      setProgressProps({
        stepName: 'ConnectingToDigitalPerson',
        currentStep: 3,
        totalSteps: 4,
      });
    }, 2000);

    setTimeout(() => {
      setProgressProps({
        stepName: 'Connected',
        currentStep: 4,
        totalSteps: 4,
      });
    }, 3500);
  };

  return (
    <div>
      <button onClick={startAnimation}>Start</button>
      <LoadingIndicator {...progressProps} />
    </div>
  );
};

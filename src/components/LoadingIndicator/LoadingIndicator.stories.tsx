import { useState } from 'preact/hooks';
import { LoadingIndicator, LoadingIndicatorProps, LoadingIndicatorProgress } from '.';

export default {
  title: `Components / LoadingIndicator`,
  component: LoadingIndicator,
  argTypes: {
    progressTo: {
      control: 'select',
      options: ['idle', 'thirtyThree', 'sixtySix', 'oneHundred', 'completed'],
      defaultValue: 'idle',
    },
  },
};

export const Basic = ({ progressTo }: LoadingIndicatorProps) => (
  <LoadingIndicator progressTo={progressTo} />
);

export const Example = () => {
  const [progressState, setProgressState] = useState(LoadingIndicatorProgress.idle);

  const startAnimation = () => {
    // Reset state
    setProgressState(LoadingIndicatorProgress.idle);

    setTimeout(() => {
      setProgressState(LoadingIndicatorProgress.thirtyThree);
    }, 500);

    setTimeout(() => {
      setProgressState(LoadingIndicatorProgress.sixtySix);
    }, 1000);

    setTimeout(() => {
      setProgressState(LoadingIndicatorProgress.oneHundred);
    }, 2000);

    setTimeout(() => {
      setProgressState(LoadingIndicatorProgress.completed);
    }, 3000);
  };

  return (
    <div>
      <button onClick={startAnimation}>Start</button>
      <LoadingIndicator progressTo={progressState} />
    </div>
  );
};

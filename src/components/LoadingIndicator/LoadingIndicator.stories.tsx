import { useState } from 'preact/hooks';
import { LoadingIndicator, LoadingIndicatorProps, ProgressStage } from '.';

export default {
  title: `Components / LoadingIndicator`,
  component: LoadingIndicator,
  argTypes: {
    progressTo: {
      control: 'select',
      options: ['idle', 'step1', 'step2', 'step3', 'completed'],
      defaultValue: 'idle',
    },
  },
};

export const Basic = ({ progressTo }: LoadingIndicatorProps) => (
  <LoadingIndicator progressTo={progressTo} />
);

export const Example = () => {
  const [progressState, setProgressState] = useState(ProgressStage.idle);

  const startAnimation = () => {
    // Reset state
    setProgressState(ProgressStage.idle);

    setTimeout(() => {
      setProgressState(ProgressStage.step1);
    }, 500);

    setTimeout(() => {
      setProgressState(ProgressStage.step2);
    }, 1000);

    setTimeout(() => {
      setProgressState(ProgressStage.step3);
    }, 2000);

    setTimeout(() => {
      setProgressState(ProgressStage.completed);
    }, 3000);
  };

  return (
    <div>
      <button onClick={startAnimation}>Start</button>
      <LoadingIndicator progressTo={progressState} />
    </div>
  );
};

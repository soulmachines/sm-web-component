import { LoadingIndicator, LoadingIndicatorProps } from '.';

export default {
  title: `Components / LoadingIndicator`,
  component: LoadingIndicator,
  argTypes: {
    progressTo: {
      control: 'select',
      options: ['idle', 'thirtyThree', 'sixtySix', 'oneHundred'],
      defaultValue: 'idle',
    },
  },
};

export const Basic = ({ progressTo }: LoadingIndicatorProps) => (
  <LoadingIndicator progressTo={progressTo} />
);

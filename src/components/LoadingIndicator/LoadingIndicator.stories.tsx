import { LoadingIndicator, LoadingIndicatorProps } from '.';

export default {
  title: `Components / LoadingIndicator`,
  component: LoadingIndicator,
  argTypes: {
    progressTo: {
      control: 'select',
      options: ['zero', 'twentyFive', 'fifty', 'seventyFive', 'oneHundred'],
      defaultValue: 'zero',
    },
  },
};

export const Basic = ({ progressTo }: LoadingIndicatorProps) => (
  <LoadingIndicator progressTo={progressTo} />
);

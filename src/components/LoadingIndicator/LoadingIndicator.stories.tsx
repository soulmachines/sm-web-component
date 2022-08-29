import { LoadingIndicator, LoadingIndicatorProps } from '.';

export default {
  title: `Components / LoadingIndicator`,
  component: LoadingIndicator,
  argTypes: {
    progress: {
      control: 'select',
      options: ['zero', 'oneQuarter', 'twoQuarter', 'threeQuarter', 'fourQuarter'],
      defaultValue: 'zero',
    },
  },
};

export const Basic = ({ progress }: LoadingIndicatorProps) => (
  <LoadingIndicator progress={progress} />
);

import { LoadingIndicator, LoadingIndicatorProps } from '.';

export default {
  title: `Components / LoadingIndicator`,
  component: LoadingIndicator,
};

export const Basic = ({ size }: LoadingIndicatorProps) => <LoadingIndicator size={size} />;
Basic.args = {
  size: '100px',
};

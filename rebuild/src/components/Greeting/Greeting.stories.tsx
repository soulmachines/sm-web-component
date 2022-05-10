import { Greeting } from '.';
import { GreetingProps } from './Greeting';

export default {
  title: `Components / Greeting`,
  component: Greeting,
};

export const Basic = ({ message }: GreetingProps) => <Greeting message={message} />;
Basic.args = {
  message: 'Welcome, click the DP to get started',
};

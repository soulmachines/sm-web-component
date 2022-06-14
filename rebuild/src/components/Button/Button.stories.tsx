import { Button, ButtonProps } from '.';

export default {
  title: `Components / Button`,
  component: Button,
};

export const Basic = ({ children }: ButtonProps) => <Button children={children} />;

Basic.args = {
  children: 'button',
};

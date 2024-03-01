import { Button, ButtonProps } from '.';

export default {
  title: 'Components / Button',
  component: Button,
  argTypes: {
    theme: { control: 'select', options: ['default', 'outline'] },
    children: {
      type: { name: 'string' },
    },
  },
  args: {
    theme: 'default',
    children: 'Hello',
  },
};

export const Basic = ({ children, theme }: ButtonProps) => (
  <Button theme={theme} children={children} />
);

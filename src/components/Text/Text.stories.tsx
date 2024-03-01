import { Text, TextProps, textSizes } from '.';

export default {
  title: 'Components / Text',
  component: Text,
  argTypes: {
    size: { control: 'select', options: textSizes },
    children: {
      type: { name: 'string' },
    },
  },
  args: {
    size: textSizes[0],
    children: 'Your session has ended. You can reconnect anytime you are ready.',
  },
};

export const Basic = ({ children, size }: TextProps) => <Text size={size}>{children}</Text>;

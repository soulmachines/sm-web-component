import { Text } from '.';
import { TextProps } from './Text';

export default {
  title: `Components / Text`,
  component: Text,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    children: {
      type: { name: 'string' },
      defaultValue: 'Your session has ended. You can reconnect anytime you are ready.',
    },
  },
};

export const Basic = ({ children, size }: TextProps) => <Text size={size}>{children}</Text>;

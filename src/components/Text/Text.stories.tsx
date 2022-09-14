import { Text } from '.';
import { TextProps } from './Text';

export const textOptions: TextProps['size'][] = ['sm', 'md', 'lg'];
export default {
  title: `Components / Text`,
  component: Text,
  argTypes: {
    size: { control: 'select', options: textOptions },
    children: {
      type: { name: 'string' },
      defaultValue: 'Your session has ended. You can reconnect anytime you are ready.',
    },
  },
};

export const Basic = ({ children, size }: TextProps) => <Text size={size}>{children}</Text>;

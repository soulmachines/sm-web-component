import { IconButton } from '.';
import paths from '../Icon/paths';
import { IconButtonProps } from './IconButton';

export default {
  title: `Components / IconButton`,
  component: IconButton,
  argTypes: {
    theme: { control: 'radio', options: ['default', 'danger'], defaultValue: 'default' },
    shadow: { control: 'boolean', defaultValue: true },
    size: { control: 'number', defaultValue: 20 },
    name: { control: 'radio', options: Object.keys(paths), defaultValue: 'microphone' },
  },
};

export const Basic = ({ theme, shadow, size, name }: IconButtonProps) => (
  <IconButton name={name} size={size} title={name} shadow={shadow} theme={theme} />
);

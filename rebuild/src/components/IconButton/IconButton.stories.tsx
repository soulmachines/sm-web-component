import { IconButton } from '.';
import paths from '../Icon/paths';
import { IconButtonProps } from './IconButton';

export default {
  title: `Components / IconButton`,
  component: IconButton,
  argTypes: { 
    theme: {  control: 'check', options: ['default', 'danger'] }, 
    shadow: {  control: 'boolean' },
    size: { control: 'number' },
    name: { control: 'check', options: Object.keys(paths) }
  }
};

export const Basic = ({ theme, shadow, size, name }: IconButtonProps) => {
  <div>
    <div>
      <IconButton name={name} size={size} title={name} shadow={shadow} theme={theme}/>
    </div>
  </div>
}
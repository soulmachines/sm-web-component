import { IconButton } from '.';
import paths from '../Icon/paths';
import { IconButtonProps, Theme } from './IconButton';

export default {
  title: `Components / IconButton`,
  component: IconButton,
};

export const Basic = ({ theme, shadow, size }: IconButtonProps) => <div>
  {Object.keys(paths).map((key) => {
  return (
    <div>
      <IconButton name={key} size={size} title={key} shadow={shadow} theme={theme}/>
    </div>
  );
  })}
  </div>

Basic.args = {
  theme: Theme.default,
  shadow: false,
  size: 40
}

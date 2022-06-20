import { IconButton } from '.';
import paths from '../Icon/paths';
import { IconButtonProps, StyleType } from './IconButton';

export default {
  title: `Components / IconButton`,
  component: IconButton,
};

export const Basic = ({ styleType, shadow, size }: IconButtonProps) => <div>
  {Object.keys(paths).map((key) => {
  return (
    <div>
      <IconButton name={key} size={size} title={key} shadow={shadow} styleType={styleType}/>
    </div>
  );
  })}
  </div>

Basic.args = {
  styleType: StyleType.default,
  shadow: false,
  size: 40
}

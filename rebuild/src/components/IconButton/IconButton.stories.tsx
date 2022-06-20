import { IconButton } from '.';
import paths from '../Icon/paths';
import { IconButtonProps, StyleType } from './IconButton';

export default {
  title: `Components / IconButton`,
  component: IconButton,
};

export const Basic = ({ styleType }: IconButtonProps) => <div>
  {Object.keys(paths).map((key) => {
  return (
    <div>
      <IconButton name={key} styleType={styleType}/>
    </div>
  );
  })}
  </div>

Basic.args = {
  styleType: StyleType.default
}

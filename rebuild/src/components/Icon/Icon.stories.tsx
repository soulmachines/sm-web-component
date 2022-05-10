import { Icon } from '.';
import { IconProps } from './Icon';
import paths from './paths';

export default {
  title: `Components / Icon`,
  component: Icon,
};

export const Basic = ({ size }: IconProps) => (
  <div style="display: flex; flex-wrap: wrap; row-gap: 20px; column-gap: 20px;">
    {Object.keys(paths).map((key) => {
      return (
        <div key={key} style="display: flex; flex-direction: column; align-items: center;">
          <Icon size={size} name={key} />
          <span style="font-size:14px;">{key}</span>
        </div>
      );
    })}
  </div>
);
Basic.args = {
  size: 40,
};

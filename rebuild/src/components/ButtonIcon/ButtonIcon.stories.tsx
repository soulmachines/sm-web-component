import { ButtonControls, ButtonProps } from '.';

export default {
  title: `Components / ButtonIcon`,
  component: ButtonControls,
};

export const Basic = ({title}: ButtonProps) => <ButtonControls title={title} />;

Basic.args = { 
  title: "BUTTON" 
}
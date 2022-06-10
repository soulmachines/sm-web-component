import { ButtonControls, ButtonOptions } from '.';

export default {
  title: `Components / ButtonIcon`,
  component: ButtonControls,
};

export const Basic = ({title}: ButtonOptions) => <ButtonControls title={title} />;

Basic.args = { 
  title: "BUTTON" 
}
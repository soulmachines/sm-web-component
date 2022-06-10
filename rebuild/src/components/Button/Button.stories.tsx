import { Button, ButtonProps } from '.';

export default {
  title: `Components / Button`,
  component: Button,
};

export const Basic = ({title}: ButtonProps) => <Button title={title} />;

Basic.args = { 
  title: "Button" 
}
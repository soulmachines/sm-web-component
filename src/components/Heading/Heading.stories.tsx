import { Heading, HeadingProps, headingTypes, headingSizes } from '.';

export default {
  title: 'Components / Heading',
  component: Heading,
  argTypes: {
    type: {
      control: 'select',
      options: headingTypes,
    },
    size: {
      control: 'select',
      options: headingSizes,
    },
    children: {
      type: { name: 'string' },
    },
  },
  args: {
    type: 'h1',
    size: 'lg',
    children: 'Sell more with empathetic brand experiences',
  },
};

export const Basic = ({ children, type, size }: HeadingProps) => (
  <Heading type={type} size={size}>
    {children}
  </Heading>
);

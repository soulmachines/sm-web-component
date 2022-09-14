import { Heading, HeadingProps, headingTypes, headingSizes } from '.';

export default {
  title: `Components / Heading`,
  component: Heading,
  argTypes: {
    type: {
      control: 'select',
      options: headingTypes,
      defaultValue: 'h1',
    },
    size: {
      control: 'select',
      options: headingSizes,
      defaultValue: 'lg',
    },
    children: {
      type: { name: 'string' },
      defaultValue: 'Sell more with empathetic brand experiences',
    },
  },
};

export const Basic = ({ children, type, size }: HeadingProps) => (
  <Heading type={type} size={size}>
    {children}
  </Heading>
);

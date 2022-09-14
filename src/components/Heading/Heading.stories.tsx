import { Heading, HeadingProps } from '.';

export const headingOptions: HeadingProps['type'][] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
  title: `Components / Heading`,
  component: Heading,
  argTypes: {
    type: {
      control: 'select',
      options: headingOptions,
      defaultValue: 'h1',
    },
    children: {
      type: { name: 'string' },
      defaultValue: 'Sell more with empathetic brand experiences',
    },
  },
};

export const Basic = ({ children, type }: HeadingProps) => (
  <Heading type={type}>{children}</Heading>
);

import { Box, BoxProps } from '.';
import { Text } from '../Text';

export default {
  title: `Components / Box`,
  component: Box,
  argTypes: {
    rounded: { control: 'boolean', defaultValue: true },
    border: { control: 'boolean', defaultValue: true },
  },
};

export const Basic = (props: BoxProps) => (
  <Box {...props}>
    <Text>Im am some text inside of a box</Text>
  </Box>
);

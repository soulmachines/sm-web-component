import { animated, config, useTransition } from 'react-spring';

const useSpring = jest.fn(() => ({ number: { to: jest.fn(() => 0) } }));

export { config, animated, useSpring, useTransition };

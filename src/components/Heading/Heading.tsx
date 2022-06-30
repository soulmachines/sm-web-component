import { createElement } from 'preact';

export type HeadingProps = {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Heading({ type, children }: HeadingProps) {
  return createElement(
    type,
    {
      className: 'sm-text-xl sm-font-rubik sm-font-medium sm-m-0',
    },
    children,
  );
}

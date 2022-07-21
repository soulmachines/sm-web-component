import { createElement } from 'preact';

export type HeadingProps = {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: string;
};

export function Heading({ type, children, size = 'sm-text-lg' }: HeadingProps) {
  // TODO jcn add text sizing styling for different headings
  return createElement(
    type,
    {
      className: `${size} sm-font-rubik sm-font-medium sm-m-0 sm-text-neutral-700`,
    },
    children,
  );
}

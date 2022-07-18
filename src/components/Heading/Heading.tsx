import { createElement } from 'preact';

export type HeadingProps = {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Heading({ type, children }: HeadingProps) {
  return createElement(
    type,
    {
      className: 'sm-text-2xl sm-font-primary sm-font-medium sm-m-0 sm-text-neutral-700',
    },
    children,
  );
}

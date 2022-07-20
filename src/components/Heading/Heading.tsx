import { createElement } from 'preact';

export type HeadingProps = {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  textClass?: string;
  size?: string;
};

export function Heading({
  type,
  children,
  size = 'sm-text-lg',
  textClass: textClass = 'sm-text-neutral-700',
}: HeadingProps) {
  // TODO jcn add text sizing styling for different headings
  return createElement(
    type,
    {
      className: `${size} sm-font-rubik sm-font-medium sm-m-0 ${textClass}`,
    },
    children,
  );
}

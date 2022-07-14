import { createElement } from 'preact';

export type HeadingProps = {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const size_converstion = {
  h1: 'sm-text-2xl',
  h2: 'sm-text-2xl',
  h3: 'sm-text-xl',
  h4: 'sm-text-xl',
  h5: 'sm-text-lg',
  h6: 'sm-text-lg',
};

export function Heading({ type, children }: HeadingProps) {
  // TODO jcn add text sizing styling for different headings
  return createElement(
    type,
    {
      className:
        `${size_converstion[type]  } sm-font-rubik sm-font-medium sm-m-0 sm-text-neutral-700`,
    },
    children,
  );
}

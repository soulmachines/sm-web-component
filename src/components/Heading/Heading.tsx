import { createElement } from 'preact';
import classNames from 'classnames';

export type HeadingProps = {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export function Heading({ type, children, size = 'lg' }: HeadingProps) {
  // TODO jcn add text sizing styling for different headings
  const sizeClass = classNames({
    'sm-text-2xs md:sm-text-xs': size === 'xs',
    'sm-text-xs md:sm-text-sm': size === 'sm',
    'sm-text-sm md:sm-text-base': size === 'md',
    'sm-text-base md:sm-text-lg': size === 'lg',
    'sm-text-lg md:sm-text-xl': size === 'xl',
    'sm-text-xl md:sm-text-2xl': size === '2xl',
  });
  return createElement(
    type,
    {
      className: `sm-font-rubik sm-font-medium sm-m-0 sm-text-neutral-700 ${sizeClass}`,
    },
    children,
  );
}

import classNames from 'classnames';

export type TextProps = {
  children?: string;
  size?: 'sm' | 'md' | 'lg';
};

export function Text({ children, size }: TextProps) {
  const sizeClass = classNames({
    'sm-text-sm': size === 'sm',
    'sm-text-base': size === 'md',
    'sm-text-lg': size === 'lg',
  });

  return <p className={`sm-font-rubik sm-font-normal ${sizeClass}`}>{children}</p>;
}
Text.defaultProps = {
  size: 'md',
};

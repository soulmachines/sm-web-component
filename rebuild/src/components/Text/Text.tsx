import classNames from 'classnames';

export type TextProps = {
  children?: string;
  size?: 'sm' | 'md' | 'lg';
};

export function Text({ children, size, ...rest }: TextProps) {
  const sizeClass = classNames({
    'sm-text-xs md:sm-text-sm': size === 'sm',
    'sm-text-sm md:sm-text-base': size === 'md',
    'sm-text-base md:sm-text-lg': size === 'lg',
  });

  return (
    <p className={`sm-text-neutral-700 sm-font-rubik sm-font-normal sm-m-0 ${sizeClass}`} {...rest}>
      {children}
    </p>
  );
}
Text.defaultProps = {
  size: 'md',
};

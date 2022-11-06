import classNames from 'classnames';

export const textSizes = ['sm', 'md', 'lg'] as const;

export type TextProps = {
  children: string | string[];
  size: typeof textSizes[number];
};

export function Text({ children, size, ...rest }: TextProps) {
  const textClassNames = classNames({
    'sm-text-primary-text sm-font-primary sm-font-normal sm-m-0': true,
    'sm-text-xs md:sm-text-sm': size === 'sm',
    'sm-text-sm md:sm-text-base': size === 'md',
    'sm-text-base md:sm-text-lg': size === 'lg',
  });

  return (
    <p className={textClassNames} {...rest}>
      {children}
    </p>
  );
}
Text.defaultProps = {
  size: 'md',
};

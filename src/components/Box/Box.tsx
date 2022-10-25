import classNames from 'classnames';

export type BoxProps = {
  children: JSX.Element | undefined;
  rounded: boolean;
  border: boolean;
  className?: string;
};

export function Box({ children, rounded, border, className }: BoxProps) {
  const classes = classNames(className, {
    'sm-transform-gpu sm-shadow-lg sm-bg-white sm-pointer-events-auto sm-w-full sm-h-full sm-overflow-hidden':
      true,
    'sm-border-2 sm-border-solid sm-border-gray-lightest': border,
    'sm-rounded-xl md:sm-rounded-3xl': rounded,
  });

  return <div className={classes}>{children}</div>;
}

Box.defaultProps = {
  rounded: false,
  border: false,
};

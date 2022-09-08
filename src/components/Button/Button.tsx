import classNames from 'classnames';

enum ButtonTheme {
  default = 'default',
  outline = 'outline',
}

export type ButtonProps = {
  children: string | JSX.Element | (string | JSX.Element)[];
  theme: keyof typeof ButtonTheme;
  onClick?: () => void;
};

export function Button({ children, theme, onClick }: ButtonProps) {
  const buttonClass = classNames({
    'sm-cursor-pointer sm-px-4 sm-py-2 sm-font-primary sm-text-sm sm-tracking-wider sm-transition-colors sm-uppercase sm-font-medium sm-outline disabled:sm-bg-primary-200  disabled:sm-cursor-not-allowed md:sm-text-base':
      true,
    'sm-text-white sm-rounded-lg sm-bg-primary-600 hover:sm-bg-primary-700 active:sm-bg-primary-800 focus:sm-bg-primary-600 focus:sm-outline-2 focus:sm-outline-primary-200':
      theme === ButtonTheme.default,
    'sm-text-left sm-flex sm-justify-between sm-items-center sm-bg-transparent sm-rounded-sm sm-text-black sm-capitalize sm-font-normal sm-border-gray-light sm-border sm-border-solid sm-transition-colors sm-outline-transparent sm-outline-1 sm-outline-offset-[-2px] hover:sm-border-primary-base hover:sm-outline-primary-base focus:sm-border-primary-base focus:sm-outline-primary-base active:sm-text-white active:sm-bg-primary-base':
      theme === ButtonTheme.outline,
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  theme: 'default',
};

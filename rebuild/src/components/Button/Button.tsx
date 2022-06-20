import classNames from 'classnames';

export type ButtonProps = {
  children: string;
  theme: 'default' | 'outline';
};

export function Button({ children, theme }: ButtonProps) {
  const buttonClass = classNames({
    'sm-cursor-pointer sm-px-4 sm-py-2 sm-font-rubik sm-rounded-lg sm-text-base sm-tracking-wider sm-uppercase sm-font-medium  disabled:sm-bg-primary-200 focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-200 disabled:sm-cursor-not-allowed':
      true,
    'sm-text-white sm-bg-primary-600 hover:sm-bg-primary-700 active:sm-bg-primary-800 focus:sm-bg-primary-600':
      theme === 'default',
    '': theme === 'outline',
  });

  return <button className={buttonClass}>{children}</button>;
}
Button.defaultProps = {
  theme: 'default',
};

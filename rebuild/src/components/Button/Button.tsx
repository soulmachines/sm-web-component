import classNames from 'classnames';

export type ButtonProps = {
  children: string;
  theme: 'default' | 'outline'; // TODO enum
};

export function Button({ children, theme }: ButtonProps) {
  const buttonClass = classNames({
    'sm-cursor-pointer sm-px-4 sm-py-2 sm-font-rubik sm-text-base sm-tracking-wider sm-uppercase sm-font-medium sm-outline disabled:sm-bg-primary-200  disabled:sm-cursor-not-allowed':
      true,
    'sm-text-white sm-rounded-lg sm-bg-primary-600 hover:sm-bg-primary-700 active:sm-bg-primary-800 focus:sm-bg-primary-600 focus:sm-outline-2 focus:sm-outline-primary-200':
      theme === 'default',
    'sm-rounded-sm sm-text-neutral-700 sm-capitalize sm-border-alpha-black10 sm-border sm-border-solid sm-transition-colors sm-outline-1 hover:sm-border-neutral-600  hover:sm-outline-neutral-600  focus:sm-border-neutral-600 focus:sm-outline-neutral-600 active:sm-text-white active:sm-bg-neutral-600':
      theme === 'outline',
  });

  return <button className={buttonClass}>{children}</button>;
}
Button.defaultProps = {
  theme: 'default',
};

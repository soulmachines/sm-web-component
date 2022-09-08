import classNames from 'classnames';
import { Icon } from '../Icon';
import paths from '../Icon/paths';

export enum Theme {
  default = 'default',
  danger = 'danger',
}

export type IconButtonProps = {
  name: keyof typeof paths;
  size?: number;
  title: string;
  shadow?: boolean;
  theme: Theme;
  onClick?: () => void;
};

export function IconButton({ name, size, title, shadow, theme, onClick }: IconButtonProps) {
  const buttonClass = classNames({
    'sm-border-none sm-cursor-pointer sm-transition-colors': true,
    'sm-bg-white sm-rounded-full sm-p-3 hover:sm-bg-grayscale-100 focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-light':
      theme == Theme.default,
    'sm-bg-tertiary-base sm-rounded-full sm-p-3 sm-text-white hover:sm-bg-tertiary-dark focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-light':
      theme == Theme.danger,
    'sm-shadow': shadow,
  });
  return (
    <button onClick={onClick} className={buttonClass}>
      <Icon name={name} size={size} title={title} />
    </button>
  );
}

IconButton.defaultProps = {
  theme: Theme.default,
  size: '20px',
};

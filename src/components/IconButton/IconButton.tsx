import classNames from 'classnames';
import { Icon, InterruptIcon } from '../Icon';
import paths from '../Icon/paths';

export enum Theme {
  default = 'default',
  danger = 'danger',
}

export type IconButtonProps = {
  name?: keyof typeof paths;
  size?: number;
  title: string;
  shadow?: boolean;
  theme: Theme;
  onClick?: () => void;
};

export function IconButton({ name, size, title, shadow, theme, onClick }: IconButtonProps) {
  return (
    <button
      aria-label={title}
      onClick={onClick}
      className={classNames(
        'sm-border-solid sm-border-1 sm-border-gray-lightest sm-cursor-pointer sm-transition-colors',
        {
          'sm-bg-white sm-rounded-full sm-p-3 hover:sm-bg-gray-lightest hover:sm-border-gray-lightest focus:sm-border-gray-light focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-light':
            theme == Theme.default,
          'sm-border-transparent sm-bg-tertiary-base sm-rounded-full sm-p-3 sm-text-white hover:sm-bg-tertiary-dark focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-light':
            theme == Theme.danger,
          'sm-shadow-sm': shadow,
        },
      )}
    >
      {name === 'stopTalking' ? (
        <InterruptIcon size={size} title={title} />
      ) : (
        <Icon name={name} size={size} title={title} />
      )}
    </button>
  );
}

IconButton.defaultProps = {
  theme: Theme.default,
  size: '20px',
};

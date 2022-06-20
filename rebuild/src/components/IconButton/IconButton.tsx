import classNames from "classnames";
import { Icon } from "../Icon";
import paths from "../Icon/paths";

export enum Theme { default, danger };

export type IconButtonProps = {
  name: keyof typeof paths,
  size?: number,
  title: string,
  shadow?: boolean,
  theme: Theme
};

export function IconButton( { name, size, title, shadow, theme }: IconButtonProps) {
  const buttonClass = classNames({
    "sm-bg-white sm-rounded-full sm-p-3 focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-200" : theme == Theme.default,
    "sm-bg-error-400 sm-rounded-full sm-p-3 sm-text-white hover:sm-bg-error-500 focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-200" : theme == Theme.danger,
    "sm-shadow": shadow
  });
  return (
    <button className={`${buttonClass}`}>
        <Icon name={name} size={size} title={title}/>
    </button>
  );
}
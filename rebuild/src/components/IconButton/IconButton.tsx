import classNames from "classnames";
import { Icon } from "../Icon";
import paths from "../Icon/paths";

export enum StyleType { default, danger };

export type IconButtonProps = {
  name: keyof typeof paths,
  size?: number,
  shadow?: boolean,
  styleType: StyleType
};

export function IconButton( { name, size, shadow, styleType }: IconButtonProps) {
  const buttonClass = classNames({
    "sm-bg-white sm-rounded-full sm-p-3 focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-200" : styleType == StyleType.default,
    "sm-bg-error-400 sm-rounded-full sm-p-3 sm-text-white hover:sm-bg-error-500 focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-200" : styleType == StyleType.danger,
    "sm-shadow": shadow
  });
  return (
    <button className={`${buttonClass}`}>
        <Icon name={name} size={size}/>
    </button>
  );
}
import classNames from "classnames";
import { Icon } from "../Icon";
import paths from "../Icon/paths";

export enum StyleType { default, danger };

export type IconButtonProps = {
  name: keyof typeof paths,
  styleType: StyleType
};

export function IconButton( { name, styleType }: IconButtonProps) {
  const styleClasses = classNames({
    "sm-bg-primary-600" : styleType == StyleType.default,
    "sm-bg-error-500" : styleType == StyleType.danger
  });
  return (
    <button className={`${styleClasses}`}>
        <Icon name={name}/>
    </button>
  );
}
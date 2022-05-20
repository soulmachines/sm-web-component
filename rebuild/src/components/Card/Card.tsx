import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { Icon } from '../Icon';

export type CardProps = {
  children?: JSX.Element;
};

export function Card({ children }: CardProps) {
  const [isHidden, setIsHidden] = useState(false);

  if (isHidden) {
    return null;
  }

  return (
    <div className="sm-bg-white sm-rounded-xl sm-relative sm-max-w-xs sm-w-full sm-px-6 sm-py-4 sm-shadow-lg">
      {children}

      <button
        onClick={() => setIsHidden(true)}
        className="sm-absolute sm-top-0 sm-right-0 sm-translate-x-1/2 -sm-translate-y-2/4"
      >
        <Icon name="close" title="Hide card" />
      </button>
    </div>
  );
}

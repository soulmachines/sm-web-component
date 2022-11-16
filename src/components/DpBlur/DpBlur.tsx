import classNames from 'classnames';
import { useRef, useState, useEffect } from 'react';
import { widgetLayout } from '../../enums';
import { MutableRef } from 'preact/hooks';

export type DpBlurProps = {
  children?: JSX.Element | undefined;
  scrollOffset?: number;
  scrollTargetRef: MutableRef<HTMLDivElement | null>;
};
export function DpBlur({ scrollTargetRef, children, scrollOffset = 20 }: DpBlurProps) {
  const [isBlurred, setIsBlurred] = useState(false);

  //TODO add Throttle. Check the video component
  useEffect(() => {
    const element = scrollTargetRef.current;

    const foo = () => {
      if (element && element.scrollTop >= scrollOffset) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    if (element) {
      element.addEventListener('scroll', foo);
    }

    return () => {
      if (element) {
        element.removeEventListener('click', foo);
      }
    };
  }, [scrollTargetRef, scrollOffset]);

  return (
    // <div style={isActive?'backdrop-filter:blur(' + maxBlur + 'px);':''}>{children}</div>
    <div
      className={classNames('sm-transition-all', {
        'sm-backdrop-blur-lg sm:sm-backdrop-blur-none': isBlurred,
      })}
    >
      {children}
    </div>
    // <div>{children}</div>
  );
}

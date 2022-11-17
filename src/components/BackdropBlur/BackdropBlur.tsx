import throttle from 'lodash/throttle';
import classNames from 'classnames';
import { useState, useEffect, MutableRef } from 'preact/hooks';

export type BackdropBlurProps = {
  children?: JSX.Element | undefined;
  scrollOffset?: number;
  scrollTargetRef: MutableRef<HTMLDivElement | null>;
};
export function BackdropBlur({ scrollTargetRef, children, scrollOffset = 20 }: BackdropBlurProps) {
  const [isBlurredOnlyOnMobile, setIsBlurredOnlyOnMobile] = useState(false);

  useEffect(() => {
    const element = scrollTargetRef.current;

    const foo = throttle(() => {
      if (element && element.scrollTop >= scrollOffset) {
        setIsBlurredOnlyOnMobile(true);
      } else {
        setIsBlurredOnlyOnMobile(false);
      }
    }, 250);

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
    <div
      className={classNames('sm-transition-all', {
        'sm-backdrop-blur-lg sm:sm-backdrop-blur-none': isBlurredOnlyOnMobile,
      })}
    >
      {children}
    </div>
  );
}

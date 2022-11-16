import throttle from 'lodash/throttle';
import classNames from 'classnames';
import { useState, useEffect, MutableRef } from 'preact/hooks';

export type BackdropBlurProps = {
  children?: JSX.Element | undefined;
  scrollOffset?: number;
  scrollTargetRef: MutableRef<HTMLDivElement | null>;
};
export function BackdropBlur({ scrollTargetRef, children, scrollOffset = 20 }: BackdropBlurProps) {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const element = scrollTargetRef.current;

    const foo = throttle(() => {
      console.log('fire');
      if (element && element.scrollTop >= scrollOffset) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
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
        'sm-backdrop-blur-lg sm:sm-backdrop-blur-none': isBlurred,
      })}
    >
      {children}
    </div>
  );
}

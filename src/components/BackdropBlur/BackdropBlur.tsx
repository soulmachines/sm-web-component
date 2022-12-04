import throttle from 'lodash/throttle';
import classNames from 'classnames';
import { useState, useEffect, MutableRef } from 'preact/hooks';

export type BackdropBlurProps = {
  children: JSX.Element | JSX.Element[];
  scrollOffset?: number;
  scrollTargetRef: MutableRef<HTMLDivElement | null>;
  smallScreenOnly?: boolean;
};
export function BackdropBlur({
  scrollTargetRef,
  children,
  scrollOffset = 20,
  smallScreenOnly = true,
}: BackdropBlurProps) {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const element = scrollTargetRef.current;

    const scrollOccurred = throttle(() => {
      if (element && element.scrollTop >= scrollOffset) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    }, 250);

    if (element) {
      element.addEventListener('scroll', scrollOccurred);
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', scrollOccurred);
      }
    };
  }, [scrollTargetRef, scrollOffset]);

  return (
    <div
      className={classNames('sm-transition-all sm-w-full sm-h-full sm-sticky sm-top-0', {
        'sm-backdrop-blur-md': isBlurred,
        'md:sm-backdrop-blur-none': smallScreenOnly,
      })}
    >
      {children}
    </div>
  );
}

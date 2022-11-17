import classNames from 'classnames';
import { useState, useEffect, MutableRef } from 'preact/hooks';

export type BackdropBlurProps = {
  children?: JSX.Element | undefined;
  scrollOffset?: number;
  scrollTargetRef: MutableRef<HTMLDivElement | null>;
  blurOnlyOnMobile?: boolean;
};
export function BackdropBlur({
  scrollTargetRef,
  children,
  scrollOffset = 20,
  blurOnlyOnMobile = true,
}: BackdropBlurProps) {
  const [isBlurred, setIsBlurred] = useState(false);

  //TODO add Throttle. Check the video component
  useEffect(() => {
    const element = scrollTargetRef.current;

    const scrollOccurred = () => {
      if (element && element.scrollTop >= scrollOffset) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    if (element) {
      element.addEventListener('scroll', scrollOccurred);
    }

    return () => {
      if (element) {
        element.removeEventListener('click', scrollOccurred);
      }
    };
  }, [scrollTargetRef, scrollOffset]);

  return (
    <div
      className={classNames('sm-transition-all', {
        'sm-backdrop-blur-lg sm:sm-backdrop-blur-none': blurOnlyOnMobile && isBlurred,
        'sm-backdrop-blur-lg': !blurOnlyOnMobile && isBlurred,
      })}
    >
      {children}
    </div>
  );
}

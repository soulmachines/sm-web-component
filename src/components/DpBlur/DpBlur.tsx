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

  useEffect(() => {
    const element = scrollTargetRef.current;
    console.log(element);

    const foo = () => {
      console.log('???? ', element?.scrollTop);
      if (element && element.scrollTop >= scrollOffset) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    if (element) {
      console.log(element);
      element.addEventListener('scroll', foo);
    }

    return () => {
      if (element) {
        element.removeEventListener('click', foo);
      }
    };
  }, [scrollTargetRef, scrollOffset]);
  // whatever the scrollable container is in the modal
  // const modal = document.querySelector('#modal'); // TODO the modal will be the card modal

  // {{element && element.addEventListener('scroll', () => {
  //   //  Add/remove blur style when scrolled certain amount
  //   // Might be able to add sm-transition-all to make it transition in/out of blur
  //   ref.current.classList
  // });}}

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

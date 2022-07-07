import classNames from 'classnames';
import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { animated, useTransition } from 'react-spring';
import { IconButton } from '../IconButton';

export type CardProps = {
  flush?: boolean;
  children?: JSX.Element;
  isDismissible?: boolean;
  style?: Record<string, 'string | CSSProperties | undefined'>;
};

export function Card(
  { children, isDismissible, style, flush }: CardProps = { isDismissible: true },
) {
  const [isHidden, setIsHidden] = useState(false);
  const cardStyles = classNames({
    'sm-bg-white sm-rounded-xl sm-w-full sm-shadow-lg sm-overflow-hidden': true,
    'sm-p-6': !flush,
  });
  const transitions = useTransition(!isHidden, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions(
    (transitionStyles, item) =>
      item && (
        <animated.div
          className="sm-relative sm-flex sm-overflow-hidden sm-pointer-events-auto sm-p-8 -sm-m-8"
          style={{ ...transitionStyles, ...style }}
        >
          <div className={cardStyles}>{children}</div>

          {isDismissible && (
            <div className="sm-absolute sm-top-8 sm-right-8 sm-translate-x-1/3 -sm-translate-y-1/3">
              <IconButton
                name="close"
                title="Hide card"
                shadow={true}
                onClick={() => setIsHidden(true)}
              />
            </div>
          )}
        </animated.div>
      ),
  );
}

Card.defaultProps = {
  isDismissible: true,
  flush: false,
};

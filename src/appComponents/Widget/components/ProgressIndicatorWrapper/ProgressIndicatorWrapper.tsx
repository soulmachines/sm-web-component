import classNames from 'classnames';
import { config, animated, useTransition } from 'react-spring';
import { widgetPosition } from '../../../../enums';

export const ProgressIndicatorWrapper = ({
  children,
  transitionIn,
  position,
}: {
  children: JSX.Element;
  transitionIn: boolean;
  position: widgetPosition;
}) => {
  const transformOriginClass = classNames({
    'sm-origin-bottom-right': position === widgetPosition.BOTTOM_RIGHT,
    'sm-origin-bottom-left': position === widgetPosition.BOTTOM_LEFT,
  });

  const scaleTransition = useTransition(transitionIn, {
    from: {
      transform: 'scale(0.5)',
    },
    enter: {
      transform: 'scale(1)',
    },
    leave: {
      // Hide the loader once we are no longer connecting, as video will be shown in place
      display: 'none',
    },
    config: config.gentle,
  });

  return scaleTransition(
    (animatedStyles, item) =>
      item && (
        <animated.div style={animatedStyles} className={transformOriginClass}>
          <div className="sm-relative sm-rounded-xl md:sm-rounded-3xl sm-transform-gpu sm-shadow-lg sm-bg-white sm-pointer-events-auto sm-border-2 sm-border-solid sm-border-gray-lightest sm-w-63 sm-h-40 md:sm-h-54 md:sm-w-88">
            {children}
          </div>
        </animated.div>
      ),
  );
};

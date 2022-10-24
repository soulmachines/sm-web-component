import classNames from 'classnames';
import { config, useSpring, animated } from 'react-spring';
import { widgetPosition } from '../../../../enums';

export const FloatingContainerAnimation = ({
  children,
  animate,
  position,
}: {
  children: JSX.Element;
  animate: boolean;
  position: widgetPosition;
}) => {
  const scaleAnimation = useSpring({
    transform: animate ? 'scale(2)' : 'scale(1)',
    config: config.gentle,
  });

  const transformOriginClass = classNames({
    'sm-origin-bottom-right': position === widgetPosition.BOTTOM_RIGHT,
    'sm-origin-bottom-left': position === widgetPosition.BOTTOM_LEFT,
  });

  // Scales down the above animation back to 1, the normal size
  // Revisit in future, prehaps could be done via a transition
  const scaledDownClass = classNames({
    [transformOriginClass]: true,
    'sm-scale-50': animate,
  });

  return (
    <div className={scaledDownClass}>
      <animated.div
        style={scaleAnimation}
        className={`${transformOriginClass} sm-rounded-xl md:sm-rounded-3xl sm-transform-gpu sm-shadow-lg sm-bg-white sm-pointer-events-auto`}
      >
        {children}
      </animated.div>
    </div>
  );
};

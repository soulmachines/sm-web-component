import classNames from 'classnames';
import { config, useSpring, animated } from 'react-spring';

export const FloatingContainerAnimation = ({
  children,
  animate,
}: {
  children: JSX.Element;
  animate: boolean;
}) => {
  const scaleAnimation = useSpring({
    transform: animate ? 'scale(2)' : 'scale(1)',
    config: config.gentle,
  });

  // Scales down the above animation back to 1, the normal size
  // Revisit in future, prehaps could be done via a transition
  const scaledDownClass = classNames({
    'sm-origin-bottom-right': true,
    'sm-scale-50': animate,
  });

  return (
    <div className={scaledDownClass}>
      <animated.div
        style={scaleAnimation}
        className={` sm-origin-bottom-right sm-rounded-xl md:sm-rounded-3xl sm-transform-gpu sm-shadow-lg sm-bg-white sm-pointer-events-auto`}
      >
        {children}
      </animated.div>
    </div>
  );
};

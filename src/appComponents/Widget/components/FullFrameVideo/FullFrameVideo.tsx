import classNames from 'classnames';
import { config, useTransition, animated } from 'react-spring';
import { widgetPosition } from '../../../../enums';
import { Video } from '../../../Video';
import { VideoControls } from '../../../VideoControls';

export const FullFrameVideo = ({
  transitionIn,
  floatingPosition,
}: {
  transitionIn: boolean;
  floatingPosition: widgetPosition;
}) => {
  const fullFrameTransition = useTransition(transitionIn, {
    from: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
      left: 20,
      right: 20,
      top: 20,
      bottom: 20,
    },
    leave: { opacity: 0, transform: 'scale(0.2)' },
    config: config.gentle,
  });

  const styles = classNames({
    'sm-fixed sm-overflow-hidden sm-rounded-xl md:sm-rounded-3xl sm-transform-gpu sm-shadow-lg sm-bg-white sm-pointer-events-auto':
      true,
    'sm-origin-bottom-left': floatingPosition === widgetPosition.BOTTOM_LEFT,
    'sm-origin-bottom-right': floatingPosition === widgetPosition.BOTTOM_RIGHT,
  });

  return fullFrameTransition(
    (animatedStyles, item) =>
      item && (
        <animated.div style={animatedStyles} className={styles}>
          <>
            <Video autoConnect={false} />
            <VideoControls />
          </>
        </animated.div>
      ),
  );
};

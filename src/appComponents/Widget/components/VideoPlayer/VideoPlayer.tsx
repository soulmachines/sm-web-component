import { config, useTransition, animated } from 'react-spring';
import { ConnectionStatus, widgetPosition } from '../../../../enums';
import classNames from 'classnames';
import { Video } from '../../../Video';
import { VideoControls } from '../../../VideoControls';
import { useSoulMachines } from '../../../../contexts/SoulMachinesContext';

export type VideoPlayerProps = {
  renderInFullFrame: boolean;
  floatingPosition: widgetPosition;
};

export const VideoPlayer = ({ renderInFullFrame, floatingPosition }: VideoPlayerProps) => {
  const { connectionStatus } = useSoulMachines();
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const fullFrameTransition = useTransition(renderInFullFrame, {
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
      pointerEvents: 'auto',
      zIndex: 9999,
    },
    leave: {
      opacity: 0,
      transform: 'scale(0.2)',
      // Turn off pointer events so content is clickable thats under the faded out video
      pointerEvents: 'none',
    },
    expires: false,
    config: config.gentle,
  });

  const fullFrameClasses = classNames({
    'sm-hidden': !isConnected,
    'sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest': true,
    'sm-origin-bottom-left': floatingPosition === widgetPosition.BOTTOM_LEFT,
    'sm-origin-bottom-right': floatingPosition === widgetPosition.BOTTOM_RIGHT,
  });

  return fullFrameTransition((animatedStyles, item) => (
    // item ? (
    <animated.div
      style={animatedStyles}
      className={`${fullFrameClasses}

        ${item && 'sm-fixed sm-z-10'}
        ${
          !item &&
          'sm-w-63 sm-h-40 md:sm-h-54 md:sm-w-88 sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest'
        }`}
    >
      <>
        <Video autoConnect={false} />
        <VideoControls />
      </>
    </animated.div>
  ));
};

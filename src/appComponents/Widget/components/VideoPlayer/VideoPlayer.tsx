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

// Component which applies the borders, shadows, rounded corners etc
const VideoWrapper = ({ children }: { children: JSX.Element }) => (
  <div
    className={
      'sm-rounded-xl md:sm-rounded-3xl sm-transform-gpu sm-shadow-lg sm-bg-white sm-pointer-events-auto sm-overflow-hidden sm-w-full sm-h-full sm-border-2 sm-border-solid sm-border-gray-lightest'
    }
  >
    {children}
  </div>
);

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
      position: 'fixed',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0.2)',
      // Turn off pointer events so content is clickable thats under the faded out video
      pointerEvents: 'none',
    },
    config: config.gentle,
  });

  const positionStyles = classNames({
    'sm-origin-bottom-left': floatingPosition === widgetPosition.BOTTOM_LEFT,
    'sm-origin-bottom-right': floatingPosition === widgetPosition.BOTTOM_RIGHT,
  });

  return fullFrameTransition((animatedStyles, item) =>
    item ? (
      <animated.div style={animatedStyles} className={positionStyles}>
        <VideoWrapper>
          <>
            <Video autoConnect={false} />
            <VideoControls />
          </>
        </VideoWrapper>
      </animated.div>
    ) : (
      <div
        className={classNames({
          'sm-w-63 sm-h-40 md:sm-h-54 md:sm-w-88': true,
          // Hide until video loaded, to avoid taking up space
          'sm-hidden': !isConnected,
        })}
      >
        <VideoWrapper>
          <>
            <Video autoConnect={false} />
            {isConnected && <VideoControls />}
          </>
        </VideoWrapper>
      </div>
    ),
  );
};

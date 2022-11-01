import { config, useSpring, animated } from 'react-spring';
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

  const videoContainerAnimation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      // Animate from 0 to 100%
      // There is min width/height on the video which gives the floating widget the correct dimensions
      width: renderInFullFrame ? '100%' : '0%',
      height: renderInFullFrame ? '100%' : '0%',
    },
    config: config.gentle,
  });

  const videoContainerClasses = classNames({
    'sm-fixed sm-transition-all sm-min-w-63 sm-min-h-40 md:sm-min-h-54 md:sm-min-w-88': true,
    'sm-bottom-0 sm-p-5': renderInFullFrame,
    'sm-bottom-5': !renderInFullFrame,
    // TODO: make styles less gross
    'sm-origin-bottom-left sm-left-5':
      floatingPosition === widgetPosition.BOTTOM_LEFT && !renderInFullFrame,
    'sm-origin-bottom-right sm-right-5':
      floatingPosition === widgetPosition.BOTTOM_RIGHT && !renderInFullFrame,
    'sm-origin-bottom-right sm-left-0':
      floatingPosition === widgetPosition.BOTTOM_LEFT && renderInFullFrame,
    'sm-origin-bottom-right sm-right-0':
      floatingPosition === widgetPosition.BOTTOM_RIGHT && renderInFullFrame,
  });

  // TODO better names and maybe create a shared style across these two elements and the loading indicator
  const wrapperClasses = classNames({
    'sm-min-w-63 sm-min-h-40 md:sm-min-h-54 md:sm-min-w-88': true,
    'sm-hidden': !isConnected,
  });

  return (
    // Keeps the container in the page for when we go from fullframe to float.
    // Prevents a shift in the layout when the video goes from fixed position to static
    <div className={wrapperClasses}>
      <animated.div style={videoContainerAnimation} className={videoContainerClasses}>
        <div className="sm-w-full sm-h-full sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest">
          <Video autoConnect={false} />
          <VideoControls />
        </div>
      </animated.div>
    </div>
  );
};

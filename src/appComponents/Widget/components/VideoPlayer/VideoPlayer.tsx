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

  const videoContainerClasses = classNames({
    'sm-transition-all sm-duration-300 sm-floating-container': true,
    'sm-fixed sm-bottom-0 sm-w-full sm-h-full sm-p-5': renderInFullFrame,
    'sm-left-0': floatingPosition === widgetPosition.BOTTOM_LEFT,
    'sm-right-0': floatingPosition === widgetPosition.BOTTOM_RIGHT,
  });

  return (
    // Keeps the container in the page for when we go from fullframe to float.
    // Prevents a shift in the layout when the video goes from fixed position to static
    <div className="sm-floating-container" hidden={!isConnected} aria-hidden={!isConnected}>
      <div className={videoContainerClasses}>
        <div className="sm-w-full sm-h-full sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest">
          <Video autoConnect={false} />
          {isConnected && <VideoControls />}
        </div>
      </div>
    </div>
  );
};

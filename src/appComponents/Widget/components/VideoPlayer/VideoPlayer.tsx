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

  return (
    // Keeps the container in the page for when we go from fullframe to float.
    // Otherwise we loose the position when the elements fixed and we get a weird layout shift
    // Need to remove it when in full frame mode as it wasnt appearing full width in safari
    <div
      className={classNames({
        'sm-floating-container': !renderInFullFrame,
      })}
      hidden={!isConnected}
      aria-hidden={!isConnected}
    >
      <div
        className={classNames('sm-transition-all sm-duration-300 sm-w-full sm-h-full', {
          'sm-fixed sm-bottom-0 sm-p-5': renderInFullFrame,
          'sm-left-0': floatingPosition === widgetPosition.BOTTOM_LEFT,
          'sm-right-0': floatingPosition === widgetPosition.BOTTOM_RIGHT,
        })}
      >
        <div className="sm-w-full sm-h-full sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest">
          <Video autoConnect={false} />
          {isConnected && <VideoControls />}
        </div>
      </div>
    </div>
  );
};

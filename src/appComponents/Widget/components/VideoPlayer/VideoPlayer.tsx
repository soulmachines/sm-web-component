import { ConnectionStatus } from '../../../../enums';
import { Video } from '../../../Video';
import { VideoControls } from '../../../VideoControls';
import { useSoulMachines } from '../../../../contexts/SoulMachinesContext';

export const VideoPlayer = () => {
  const { connectionStatus } = useSoulMachines();
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;

  return (
    <div className="sm-transition-all sm-duration-300 sm-w-full sm-h-full">
      <div className="sm-w-full sm-h-full sm-overflow-y-auto sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest">
        <Video autoConnect={false} />
        {isConnected && <VideoControls />}
      </div>
    </div>
  );
};

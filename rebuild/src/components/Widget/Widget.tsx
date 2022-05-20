import { Fragment, JSX } from 'preact';
import { ProfileImage } from '../ProfileImage';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Card } from '../Card';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';
import { ConnectionStatus } from '../../hooks/useConnection';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  loadingIndicator?: JSX.Element;
};

export function Widget({ profilePicture, greeting, loadingIndicator }: WidgetProps) {
  const { connectionStatus, connect, connectionError } = useSoulMachines();

  const renderContent = () => {
    if (connectionStatus === ConnectionStatus.ERRORED) {
      return (
        <Fragment>
          <p>Unable to connect. {connectionError?.message}</p>
          <button onClick={connect}>Retry</button>
        </Fragment>
      );
    } else if (connectionStatus === ConnectionStatus.TIMED_OUT) {
      return (
        <Fragment>
          <p>Your session has ended. You can reconnect anytime you are ready.</p>
          <button onClick={connect}>Connect</button>
        </Fragment>
      );
    }

    return <p>{greeting || "Got any questions? I'm happy to help."}</p>;
  };

  if (
    connectionStatus === ConnectionStatus.CONNECTING ||
    connectionStatus === ConnectionStatus.CONNECTED
  ) {
    return (
      <Fragment>
        <Video autoConnect={false} loadingIndicator={loadingIndicator} />
        <VideoControls />
      </Fragment>
    );
  }

  return (
    <Card>
      <Fragment>
        <button onClick={connect}>
          <ProfileImage src={profilePicture} />
        </button>

        {renderContent()}
      </Fragment>
    </Card>
  );
}

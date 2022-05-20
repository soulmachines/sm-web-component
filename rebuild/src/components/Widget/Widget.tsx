import { Fragment, JSX } from 'preact';
import { ProfileImage } from '../ProfileImage';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Card } from '../Card';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  loadingIndicator?: JSX.Element;
};

export function Widget({ profilePicture, greeting, loadingIndicator }: WidgetProps) {
  const { isConnecting, isConnected, isTimedOut, connect, connectionError } = useSoulMachines();
  const isDisconnected = !isConnecting && !isConnected;

  const renderContent = () => {
    if (connectionError) {
      return (
        <Fragment>
          <p>Unable to connect. {connectionError.message}</p>
          <button onClick={connect}>Retry</button>
        </Fragment>
      );
    } else if (isTimedOut) {
      return (
        <Fragment>
          <p>Your session has ended. You can reconnect anytime you are ready.</p>
          <button onClick={connect}>Connect</button>
        </Fragment>
      );
    }

    return <p>{greeting || "Got any questions? I'm happy to help."}</p>;
  };

  if (isDisconnected) {
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

  return (
    <Fragment>
      <Video autoConnect={false} loadingIndicator={loadingIndicator} />
      <VideoControls />
    </Fragment>
  );
}

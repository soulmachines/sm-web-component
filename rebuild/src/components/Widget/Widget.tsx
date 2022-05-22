import { Fragment, JSX } from 'preact';
import { ProfileImage } from '../ProfileImage';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Card } from '../Card';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';
import { ConnectionStatus } from '../../enums';
import { Text } from '../Text';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  loadingIndicator?: JSX.Element;
};

export function Widget({ profilePicture, greeting, loadingIndicator }: WidgetProps) {
  const { connectionStatus, connect, connectionError } = useSoulMachines();
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;

  const renderContent = () => {
    if (connectionStatus === ConnectionStatus.ERRORED) {
      return (
        <Fragment>
          <Text>{`Unable to connect. ${connectionError?.message}`}</Text>
          <button onClick={connect}>Retry</button>
        </Fragment>
      );
    } else if (connectionStatus === ConnectionStatus.TIMED_OUT) {
      return (
        <Fragment>
          <Text>Your session has ended. You can reconnect anytime you are ready.</Text>
          <button onClick={connect}>Connect</button>
        </Fragment>
      );
    }

    return <Text>{greeting || "Got any questions? I'm happy to help."}</Text>;
  };

  if (connectionStatus === ConnectionStatus.CONNECTING || isConnected) {
    return (
      <Fragment>
        <Video autoConnect={false} loadingIndicator={loadingIndicator} />
        {isConnected && <VideoControls />}
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

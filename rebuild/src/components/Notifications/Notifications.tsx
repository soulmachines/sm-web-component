import { Fragment } from 'preact';
import { Card } from '../Card';
import { Text } from '../Text';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';

export type NotificationsProps = {
  greeting?: string;
};

export function Notifications({ greeting }: NotificationsProps) {
  const { connectionStatus, connect, connectionError } = useSoulMachines();

  const renderContent = () => {
    if (connectionStatus === ConnectionStatus.ERRORED) {
      return (
        <Fragment>
          <Text>{`Unable to connect. ${connectionError?.message}`}</Text>
          <button onClick={connect}>Retry</button>
        </Fragment>
      );
    }

    if (connectionStatus === ConnectionStatus.TIMED_OUT) {
      return (
        <Fragment>
          <Text>Your session has ended. You can reconnect anytime you are ready.</Text>
          <button onClick={connect}>Connect</button>
        </Fragment>
      );
    }

    if (connectionStatus === ConnectionStatus.DISCONNECTED) {
      return (
        <Text data-sm="greetingText">{greeting || "Got any questions? I'm happy to help."}</Text>
      );
    }
  };

  return <Card>{renderContent()}</Card>;
}

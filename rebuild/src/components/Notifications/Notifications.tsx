import { Fragment } from 'preact';
import { Card } from '../Card';
import { Text } from '../Text';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';
import { Button } from '../Button';

export type NotificationsProps = {
  greeting?: string;
};

export function Notifications({ greeting }: NotificationsProps) {
  const { connectionStatus, connect, connectionError } = useSoulMachines();

  const renderContent = () => {
    if (connectionStatus === ConnectionStatus.ERRORED) {
      return (
        <div className="sm-flex sm-flex-col sm-gap-y-3 sm-items-start">
          <Text>{`Unable to connect. ${connectionError?.message}`}</Text>
          <Button onClick={connect}>Retry</Button>
        </div>
      );
    }

    if (connectionStatus === ConnectionStatus.TIMED_OUT) {
      return (
        <div className="sm-flex sm-flex-col sm-gap-y-3 sm-items-start">
          <Text>Your session has ended. You can reconnect anytime you are ready.</Text>
          <Button onClick={connect}>Connect</Button>
        </div>
      );
    }

    if (connectionStatus === ConnectionStatus.DISCONNECTED) {
      return (
        <Text data-sm-cy="greetingText">{greeting || "Got any questions? I'm happy to help."}</Text>
      );
    }
  };

  return <Card>{renderContent()}</Card>;
}

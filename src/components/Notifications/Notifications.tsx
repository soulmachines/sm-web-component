import { animated, useTransition } from 'react-spring';
import { Text } from '../Text';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { useState } from 'preact/hooks';

export type NotificationsProps = {
  greeting?: string;
};

export function Notifications({ greeting }: NotificationsProps) {
  const { connectionStatus, connect, connectionError } = useSoulMachines();
  const [isHidden, setIsHidden] = useState(false);
  const transitions = useTransition(!isHidden, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
        <div>
          <Text data-sm-cy="greetingText">
            {greeting || "Got any questions? I'm happy to help."}
          </Text>
        </div>
      );
    }
  };

  return transitions(
    (transitionStyles, item) =>
      item && (
        <animated.div
          className="sm-relative sm-flex sm-overflow-hidden sm-pointer-events-auto sm-p-8 -sm-m-8"
          style={transitionStyles}
        >
          <div className="sm-round-shadow-box sm-w-full sm-p-6">{renderContent()}</div>

          <div className="sm-absolute sm-top-8 sm-right-8 sm-translate-x-1/3 -sm-translate-y-1/3">
            <IconButton
              name="close"
              title="Hide card"
              shadow={true}
              onClick={() => setIsHidden(true)}
            />
          </div>
        </animated.div>
      ),
  );
}

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
  const renderDefaultScreen = !isConnecting && !isConnected;

  function Greeting({ children }: { children: JSX.Element }) {
    return (
      <Fragment>
        <button onClick={connect}>
          <ProfileImage src={profilePicture} />
        </button>

        {children}
      </Fragment>
    );
  }

  if (connectionError) {
    return (
      <Greeting>
        <Fragment>
          <p>Unable to connect. {connectionError.message}</p>
          <button onClick={connect}>Retry</button>
        </Fragment>
      </Greeting>
    );
  }

  if (isTimedOut) {
    return (
      <Greeting>
        <Fragment>
          <p>Your session has ended. You can reconnect anytime you are ready.</p>
          <button onClick={connect}>Connect</button>
        </Fragment>
      </Greeting>
    );
  }

  if (renderDefaultScreen) {
    return (
      <Greeting>
        <Fragment>
          <Card>
            <p>{greeting || "Got any questions? I'm happy to help."}</p>
          </Card>
        </Fragment>
      </Greeting>
    );
  }

  return (
    <Fragment>
      <Video autoConnect={false} loadingIndicator={loadingIndicator} />
      <VideoControls />
    </Fragment>
  );
}

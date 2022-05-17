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
  const { isConnecting, isConnected, connect } = useSoulMachines();
  const renderDefaultScreen = !isConnecting && !isConnected;

  if (renderDefaultScreen) {
    return (
      <Fragment>
        <button onClick={connect}>
          <ProfileImage src={profilePicture} />
        </button>

        <Card>
          <p>{greeting || "Got any questions? I'm happy to help."}</p>
        </Card>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Video autoConnect={false} loadingIndicator={loadingIndicator} />
      <VideoControls />
    </Fragment>
  );
}

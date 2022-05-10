import { Fragment, JSX } from 'preact';
import { ProfileImage } from '../ProfileImage';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Greeting } from '../Greeting';
import { Video } from '../Video';

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
        <Greeting message={greeting} />
      </Fragment>
    );
  }

  return <Video autoConnect={false} loadingIndicator={loadingIndicator} />;
}

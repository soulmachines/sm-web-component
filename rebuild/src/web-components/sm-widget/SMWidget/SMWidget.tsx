import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../../contexts/SoulMachinesContext';
import { Video } from '../../../components/Video';
import { Widget } from '../../../components/Widget';

export type SMWidgetProps = {
  apiKey?: string;
  tokenServer?: string;
  connectingIndicator?: JSX.Element;
  greeting?: string;
  profilePicture?: string;
};

export function SMWidget({
  tokenServer,
  apiKey,
  connectingIndicator,
  greeting,
  profilePicture,
}: SMWidgetProps) {
  return (
    <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
      <Widget greeting={greeting} profilePicture={profilePicture}>
        <Video autoConnect={false} loadingIndicator={connectingIndicator} />
      </Widget>
    </SoulMachinesProvider>
  );
}

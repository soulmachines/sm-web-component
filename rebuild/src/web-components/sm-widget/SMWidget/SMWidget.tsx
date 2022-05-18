import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../../contexts/SoulMachinesContext';
import { Widget } from '../../../components/Widget';
import { SMMediaProvider } from '../../../contexts/SMMedia';

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
      <SMMediaProvider>
        <Widget
          greeting={greeting}
          profilePicture={profilePicture}
          loadingIndicator={connectingIndicator}
        />
      </SMMediaProvider>
    </SoulMachinesProvider>
  );
}

import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../../contexts/SoulMachinesContext';
import { Widget } from '../../../components/Widget';
import { BindPublicSmEvents } from '../../../components/BindPublicSmEvents';

export type SMWidgetProps = {
  apiKey?: string;
  tokenServer?: string;
  connectingIndicator?: JSX.Element;
  greeting?: string;
  profilePicture?: string;
  position?: string;
  parent: HTMLElement;
};

export function SMWidget({
  tokenServer,
  apiKey,
  connectingIndicator,
  greeting,
  profilePicture,
  position,
  parent,
}: SMWidgetProps) {
  return (
    <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
      <BindPublicSmEvents element={parent} />
      <Widget
        greeting={greeting}
        profilePicture={profilePicture}
        loadingIndicator={connectingIndicator}
        position={position}
      />
    </SoulMachinesProvider>
  );
}

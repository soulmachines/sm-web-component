import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../../contexts/SoulMachinesContext';
import { Widget } from '../../../components/Widget';
import { BindPublicSmEvents } from '../../../components/BindPublicSmEvents';
import { widgetPosition } from '../../../enums';

export type SMWidgetProps = {
  apiKey?: string;
  tokenServer?: string;
  customCard?: JSX.Element;
  connectingIndicator?: JSX.Element;
  greeting?: string;
  profilePicture?: string;
  position?: widgetPosition;
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
  customCard,
}: SMWidgetProps) {
  return (
    <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer} customCard={customCard}>
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

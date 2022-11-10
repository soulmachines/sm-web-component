import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../../contexts/SoulMachinesContext';
import { Widget } from '../../../appComponents/Widget';
import { BindPublicSmEvents } from '../../../appComponents/BindPublicSmEvents';
import { widgetLayout, widgetPosition } from '../../../enums';
import { useEffect } from 'preact/hooks';

export type SMWidgetProps = {
  apiKey?: string;
  tokenServer?: string;
  connectingIndicator?: JSX.Element;
  greeting?: string;
  profilePicture?: string;
  position?: widgetPosition;
  layout?: widgetLayout;
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
  layout,
}: SMWidgetProps) {
  // Add class to parent that contains our global styles
  parent.classList.add('sm-widget');

  useEffect(() => {
    // dispatch an event for widget consumers to know when
    // the element's public api is ready to be consumed
    parent.dispatchEvent(new Event('ready'));
  }, [parent]);

  return (
    <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer} initialLayout={layout}>
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

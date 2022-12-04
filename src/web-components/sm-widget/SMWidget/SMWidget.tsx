import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../../contexts/SoulMachinesContext';
import { Widget } from '../../../appComponents/Widget';
import { BindPublicSmInterface } from '../../../appComponents/BindPublicSmInterface';
import { widgetLayout, widgetPosition } from '../../../enums';
import { useEffect } from 'preact/hooks';
import { Persona, Scene } from '@soulmachines/smwebsdk';
import { BindSpeechMarkersEvents } from '../../../appComponents/BindSpeechMarkersEvents';

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

/**
 * Public interface for the SMWidget custom element,
 * may be used by Typescript-based consumers.
 */
export interface SMWidgetElement extends HTMLElement {
  persona?: Persona;
  scene?: Scene;
  sendTextMessage?: (message: string) => void;
  enableDebugLogging?: (enabled: boolean) => void;
}

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
  useEffect(() => {
    // Add class to parent that contains our global styles
    parent.classList.add('sm-widget');

    // dispatch an event for widget consumers to know when
    // the element's public api is ready to be consumed
    parent.dispatchEvent(new Event('ready'));

    // exclude all deps so effect runs only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer} initialLayout={layout}>
      <BindPublicSmInterface element={parent} />
      <BindSpeechMarkersEvents />
      <Widget
        greeting={greeting}
        profilePicture={profilePicture}
        loadingIndicator={connectingIndicator}
        position={position}
      />
    </SoulMachinesProvider>
  );
}

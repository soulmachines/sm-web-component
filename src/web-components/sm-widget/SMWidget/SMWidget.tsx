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
  enableCamera?: boolean;
  enableMicrophone?: boolean;
  autoConnect?: boolean;
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
  enableCamera,
  enableMicrophone,
  autoConnect,
}: SMWidgetProps) {
  // force the types to boolean. this should not be necessary however these values are propagating as strings in some cases leading to failed comparisons later
  const microphoneOn: boolean = /true/i.test(`${enableMicrophone}`);
  const cameraOn: boolean = /true/i.test(`${enableCamera}`);
  const autoConnectOn: boolean = /true/i.test(`${autoConnect}`);

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
    <SoulMachinesProvider
      apiKey={apiKey}
      tokenServer={tokenServer}
      initialLayout={layout}
      enableCamera={cameraOn}
      enableMicrophone={microphoneOn}
      parent={parent}
    >
      <BindPublicSmInterface element={parent} />
      <BindSpeechMarkersEvents />
      <Widget
        greeting={greeting}
        profilePicture={profilePicture}
        loadingIndicator={connectingIndicator}
        position={position}
        autoConnect={autoConnectOn}
      />
    </SoulMachinesProvider>
  );
}

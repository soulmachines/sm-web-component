import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../../contexts/SoulMachinesContext';
import { Widget } from '../../../appComponents/Widget';
import { BindPublicSmInterface } from '../../../appComponents/BindPublicSmInterface';
import { widgetLayout, widgetPosition } from '../../../enums';
import { useEffect } from 'preact/hooks';
import { Persona, Scene } from '@soulmachines/smwebsdk';
import { BindSpeechMarkersEvents } from '../../../appComponents/BindSpeechMarkersEvents';
import { MemoIteratorCapped } from 'lodash';

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
  config?: string;
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
  config,
}: SMWidgetProps) {
  // force the types to boolean. this should not be necessary however these values are propagating as strings in some cases leading to failed comparisons later
  const microphoneOn: boolean = /true/i.test(`${enableMicrophone}`);
  const cameraOn: boolean = /true/i.test(`${enableCamera}`);
  const autoConnectOn: boolean = /true/i.test(`${autoConnect}`);
  let configObj: any;
  if (config) {
    configObj = JSON.parse(config);
  }
  let contentsApikey: any;
  let memoryPrjectId: any;
  if (apiKey) {
    const json = atob(apiKey);
    //console.log('dpWidgetConnectDP: ' + json);
    contentsApikey = JSON.parse(json);
    memoryPrjectId = contentsApikey?.soulId;
  }

  useEffect(() => {
    // Add class to parent that contains our global styles
    parent.classList.add('sm-widget');

    // dispatch an event for widget consumers to know when
    // the element's public api is ready to be consumed
    parent.dispatchEvent(new Event('ready'));
    const setupMemory = async () => {
      console.log('The config object is getting read', configObj);
      console.log('Memory project ID', memoryPrjectId);
      const sessionMemory = { PUBLIC: { session_config: configObj } };
      const kLatestProjectSessionPrefix = 'sm-mem-project-';
      const localStorageKey = `${kLatestProjectSessionPrefix}${memoryPrjectId}`;
      localStorage.setItem(localStorageKey, JSON.stringify(sessionMemory));
    };

    setupMemory();
  }, [configObj, memoryPrjectId]);

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

import { useEffect } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';
import { Persona, Scene } from '@soulmachines/smwebsdk';

export interface WebComponentElement extends HTMLElement {
  persona?: Persona;
  scene?: Scene;
  sendTextMessage?: (message: string) => void;
  enableDebugLogging?: (enabled: boolean) => void;
}

export type BindPublicSmEventsProps = {
  element: WebComponentElement;
};

// Ignoring as I want to use the generic Function type since we don't know what the Function will look like
// eslint-disable-next-line @typescript-eslint/ban-types
type GenericFunction = Function;

export function BindPublicSmEvents({ element }: BindPublicSmEventsProps) {
  const htmlElement = element as unknown as Record<string, GenericFunction | undefined>;
  const { connectionStatus, persona, scene, sendTextMessage, enableDebugLogging } =
    useSoulMachines();

  useEffect(() => {
    // expose `persona` as a public property
    Object.defineProperty(element, 'persona', {
      configurable: true,
      get() {
        return persona;
      },
    });

    // expose `scene` as a public property
    Object.defineProperty(element, 'scene', {
      configurable: true,
      get() {
        return scene;
      },
    });

    const publicMethods: [string, GenericFunction][] = [
      ['sendTextMessage', sendTextMessage],
      ['enableDebugLogging', enableDebugLogging],
    ];

    const addPublicMethods = () => {
      publicMethods.map(([name, implementation]) => {
        htmlElement[name] = implementation;
      });
    };
    const removePublicMethods = () => {
      publicMethods.map(([name]) => {
        htmlElement[name] = undefined;
      });
    };

    if (
      connectionStatus === ConnectionStatus.CONNECTING ||
      connectionStatus === ConnectionStatus.CONNECTED
    ) {
      addPublicMethods();
    } else {
      removePublicMethods();
    }
  }, [element, connectionStatus, htmlElement, persona, scene, sendTextMessage, enableDebugLogging]);

  return null;
}

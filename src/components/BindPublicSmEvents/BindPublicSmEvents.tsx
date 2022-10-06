import { useEffect } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';

export interface WebComponentElement extends HTMLElement {
  sendTextMessage?: (message: string) => void;
}

export type BindPublicSmEventsProps = {
  element: WebComponentElement;
};

// Ignoring as I want to use the generic Function type since we don't know what the Function will look like
// eslint-disable-next-line @typescript-eslint/ban-types
type GenericFunction = Function;

export function BindPublicSmEvents({ element }: BindPublicSmEventsProps) {
  const htmlElement = element as unknown as Record<string, GenericFunction | undefined>;
  const { connectionStatus, sendTextMessage, enableDebugLogging } = useSoulMachines();

  useEffect(() => {
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
  }, [connectionStatus, htmlElement, sendTextMessage, enableDebugLogging]);

  return null;
}

import { useEffect } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';

export interface WebComponentElement extends HTMLElement {
  sendTextMessage?: (message: string) => void;
}

export type BindPublicSmEventsProps = {
  element: WebComponentElement;
};

type GenericFunction = (args: unknown) => void;

export function BindPublicSmEvents({ element }: BindPublicSmEventsProps) {
  const htmlElement = element as unknown as Record<string, GenericFunction | undefined>;
  const { persona, connectionStatus } = useSoulMachines();

  useEffect(() => {
    const sendTextMessage = (text: string) => {
      persona.conversationSend(text, {}, {});
    };
    const publicMethods: [string, GenericFunction][] = [['sendTextMessage', sendTextMessage]];

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

    if (connectionStatus === ConnectionStatus.CONNECTED) {
      addPublicMethods();
    } else {
      removePublicMethods();
    }
  }, [connectionStatus, htmlElement, persona]);

  return null;
}

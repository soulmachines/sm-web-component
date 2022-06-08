import { useEffect } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';

export interface WebComponentElement extends HTMLElement {
  sendTextMessage?: Function;
}

export type BindPublicSmEventsProps = {
  element: WebComponentElement;
};

export function BindPublicSmEvents({ element }: BindPublicSmEventsProps) {
  const htmlElement = element as unknown as Record<string, Function | undefined>;
  const { persona, connectionStatus } = useSoulMachines();
  const sendTextMessage = (text: string) => {
    persona.conversationSend(text, {}, {});
  };
  const publicMethods: [string, Function][] = [['sendTextMessage', sendTextMessage]];
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

  useEffect(() => {
    if (connectionStatus === ConnectionStatus.CONNECTED) {
      addPublicMethods();
    } else {
      removePublicMethods();
    }
  }, [connectionStatus]);

  return null;
}

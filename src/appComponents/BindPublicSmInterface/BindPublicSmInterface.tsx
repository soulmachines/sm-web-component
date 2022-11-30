import { useEffect } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';
import { SMWidgetElement } from '../../web-components/sm-widget/SMWidget/SMWidget';

export type BindPublicSmInterfaceProps = {
  element: SMWidgetElement;
};

// Ignoring as I want to use the generic Function type since we don't know what the Function will look like
// eslint-disable-next-line @typescript-eslint/ban-types
type GenericFunction = Function;

export function BindPublicSmInterface({ element }: BindPublicSmInterfaceProps) {
  const { connectionStatus, persona, scene, sendTextMessage, enableDebugLogging } =
    useSoulMachines();

  useEffect(() => {
    /**
     * Expose persona and scene immediately, before connect,
     * to allow for adding listeners before connect starts
     */
    Object.defineProperties(element, {
      persona: {
        configurable: true,
        get: () => persona,
      },
      scene: {
        configurable: true,
        get: () => scene,
      },
    });
  }, [element, persona, scene]);

  useEffect(() => {
    const htmlElement = element as unknown as Record<string, GenericFunction | undefined>;

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
  }, [element, connectionStatus, sendTextMessage, enableDebugLogging]);

  return null;
}

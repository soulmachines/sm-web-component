import { useEffect } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { SMWidgetElement } from '../../web-components/sm-widget/SMWidget/SMWidget';

export type BindPublicSmInterfaceProps = {
  element: SMWidgetElement;
};

// Ignoring as I want to use the generic Function type since we don't know what the Function will look like
// eslint-disable-next-line @typescript-eslint/ban-types
type GenericFunction = Function;

export function BindPublicSmInterface({ element }: BindPublicSmInterfaceProps) {
  const { persona, scene, sendTextMessage, enableDebugLogging } = useSoulMachines();

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

    publicMethods.map(([name, implementation]) => {
      htmlElement[name] = implementation;
    });
  }, [element, sendTextMessage, enableDebugLogging]);

  return null;
}

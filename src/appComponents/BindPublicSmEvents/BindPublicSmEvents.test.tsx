import { render } from '@testing-library/preact';
import { BindPublicSmEvents, WebComponentElement } from '.';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<BindPublicSmEvents />', () => {
  const element: WebComponentElement = document.createElement('div');

  describe(`when it is initialized`, () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
      });
    });

    it('exposes `persona` as a property of the element', () => {
      const { persona } = SoulMachinesContext.useSoulMachines();
      render(<BindPublicSmEvents element={element} />);

      expect(element.persona).toBe(persona);
    });

    it('exposes `scene` as a property of the element', () => {
      const { scene } = SoulMachinesContext.useSoulMachines();
      render(<BindPublicSmEvents element={element} />);

      expect(element.scene).toBe(scene);
    });

    it('dispatches a `ready` event from the element', () => {
      const mockCallback = jest.fn();
      element.addEventListener('ready', mockCallback);
      render(<BindPublicSmEvents element={element} />);

      expect(mockCallback).toHaveBeenCalledTimes(1);
      element.removeEventListener('ready', mockCallback);
    });

    it('dispatches `ready` event after all properties are ready', () => {
      const callback = () => {
        element.removeEventListener('ready', callback);
        expect(element.scene).toBeDefined();
        expect(element.persona).toBeDefined();
      };
      element.addEventListener('ready', callback);

      render(<BindPublicSmEvents element={element} />);
    });
  });

  const whenNotConnectingOrConnected = [
    { description: 'disconnected', statusEnum: ConnectionStatus.DISCONNECTED },
    { description: 'timed out', statusEnum: ConnectionStatus.TIMED_OUT },
    { description: 'errored', statusEnum: ConnectionStatus.ERRORED },
  ];

  whenNotConnectingOrConnected.forEach(({ description, statusEnum }) => {
    describe(`when it is ${description}`, () => {
      beforeEach(() => {
        jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: statusEnum,
        });
      });

      it('does not call sendTextMessage', () => {
        const { sendTextMessage } = SoulMachinesContext.useSoulMachines();
        render(<BindPublicSmEvents element={element} />);

        element.sendTextMessage?.('test');
        expect(sendTextMessage).not.toHaveBeenCalled();
      });

      it('does not call enableDebugLogging', () => {
        const { enableDebugLogging } = SoulMachinesContext.useSoulMachines();
        render(<BindPublicSmEvents element={element} />);

        element.enableDebugLogging?.(true);
        expect(enableDebugLogging).not.toHaveBeenCalled();
      });
    });
  });

  const whenConnectingOrConnected = [
    { description: 'connecting', statusEnum: ConnectionStatus.CONNECTING },
    { description: 'connected', statusEnum: ConnectionStatus.CONNECTED },
  ];

  whenConnectingOrConnected.forEach(({ description, statusEnum }) => {
    describe(`when it is ${description}`, () => {
      beforeEach(() => {
        jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: statusEnum,
        });
      });

      it('calls sendTextMessage with the text when element.sendTextMessage is called', () => {
        const { sendTextMessage } = SoulMachinesContext.useSoulMachines();
        render(<BindPublicSmEvents element={element} />);

        element.sendTextMessage?.('test');
        expect(sendTextMessage).toHaveBeenCalledWith('test');
      });

      it('calls enableDebugLogging when element.enableDebugLogging is called', () => {
        const { enableDebugLogging } = SoulMachinesContext.useSoulMachines();
        render(<BindPublicSmEvents element={element} />);

        element.enableDebugLogging?.(true);
        expect(enableDebugLogging).toHaveBeenCalledWith(true);

        element.enableDebugLogging?.(false);
        expect(enableDebugLogging).toHaveBeenCalledWith(false);
      });
    });
  });
});

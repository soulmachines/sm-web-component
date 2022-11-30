import { render } from '@testing-library/preact';
import { BindPublicSmInterface } from '.';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';
import { SMWidgetElement } from '../../web-components/sm-widget/SMWidget/SMWidget';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<BindPublicSmInterface />', () => {
  const element: SMWidgetElement = document.createElement('div');

  describe(`when it is initialized`, () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
      });
    });

    it('exposes `persona` as a property of the element', () => {
      const { persona } = SoulMachinesContext.useSoulMachines();
      render(<BindPublicSmInterface element={element} />);

      expect(element.persona).toBe(persona);
    });

    it('exposes `scene` as a property of the element', () => {
      const { scene } = SoulMachinesContext.useSoulMachines();
      render(<BindPublicSmInterface element={element} />);

      expect(element.scene).toBe(scene);
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
        render(<BindPublicSmInterface element={element} />);

        element.sendTextMessage?.('test');
        expect(sendTextMessage).not.toHaveBeenCalled();
      });

      it('does not call enableDebugLogging', () => {
        const { enableDebugLogging } = SoulMachinesContext.useSoulMachines();
        render(<BindPublicSmInterface element={element} />);

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
        render(<BindPublicSmInterface element={element} />);

        element.sendTextMessage?.('test');
        expect(sendTextMessage).toHaveBeenCalledWith('test');
      });

      it('calls enableDebugLogging when element.enableDebugLogging is called', () => {
        const { enableDebugLogging } = SoulMachinesContext.useSoulMachines();
        render(<BindPublicSmInterface element={element} />);

        element.enableDebugLogging?.(true);
        expect(enableDebugLogging).toHaveBeenCalledWith(true);

        element.enableDebugLogging?.(false);
        expect(enableDebugLogging).toHaveBeenCalledWith(false);
      });
    });
  });
});

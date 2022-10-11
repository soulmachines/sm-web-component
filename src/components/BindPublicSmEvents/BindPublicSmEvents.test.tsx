import { render } from '@testing-library/preact';
import { BindPublicSmEvents, WebComponentElement } from '.';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<BindPublicSmEvents />', () => {
  const element: WebComponentElement = document.createElement('div');

  [
    { description: 'disconnected', statusEnum: ConnectionStatus.DISCONNECTED },
    { description: 'timed out', statusEnum: ConnectionStatus.TIMED_OUT },
    { description: 'errored', statusEnum: ConnectionStatus.ERRORED },
  ].forEach(({ description, statusEnum }) => {
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

  [
    { description: 'connecting', statusEnum: ConnectionStatus.CONNECTING },
    { description: 'connected', statusEnum: ConnectionStatus.CONNECTED },
  ].forEach(({ description, statusEnum }) => {
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

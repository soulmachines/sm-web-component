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
      it('does not call sendTextMessage', () => {
        jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: statusEnum,
        });

        const { sendTextMessage } = SoulMachinesContext.useSoulMachines();
        render(<BindPublicSmEvents element={element} />);

        element.sendTextMessage?.('test');
        expect(sendTextMessage).not.toHaveBeenCalled();
      });
    });
  });

  [
    { description: 'connecting', statusEnum: ConnectionStatus.CONNECTING },
    { description: 'connected', statusEnum: ConnectionStatus.CONNECTED },
  ].forEach(({ description, statusEnum }) => {
    describe(`when it is ${description}`, () => {
      it('calls sendTextMessage with the text when element.sendTextMessage is called', () => {
        jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: statusEnum,
        });

        const { sendTextMessage } = SoulMachinesContext.useSoulMachines();
        render(<BindPublicSmEvents element={element} />);

        element.sendTextMessage?.('test');
        expect(sendTextMessage).toHaveBeenCalledWith('test');
      });
    });
  });
});

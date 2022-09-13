import { render } from '@testing-library/preact';
import { vi } from 'vitest';
import { BindPublicSmEvents, WebComponentElement } from '.';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';

vi.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<BindPublicSmEvents />', () => {
  const element: WebComponentElement = document.createElement('div');

  describe('when it is not connected', () => {
    beforeEach(() => {
      vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.DISCONNECTED,
      });
    });

    it('does not call sendTextMessage', () => {
      const { sendTextMessage } = SoulMachinesContext.useSoulMachines();
      render(<BindPublicSmEvents element={element} />);

      element.sendTextMessage?.('test');

      expect(sendTextMessage).not.toHaveBeenCalled();
    });
  });

  describe('when it is connected', () => {
    beforeEach(() => {
      vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.CONNECTED,
      });
    });

    it('calls sendTextMessage with the text when element.sendTextMessage is called', () => {
      const { sendTextMessage } = SoulMachinesContext.useSoulMachines();
      render(<BindPublicSmEvents element={element} />);

      element.sendTextMessage?.('test');

      expect(sendTextMessage).toHaveBeenCalledWith('test');
    });
  });
});

import { fireEvent, render } from '@testing-library/preact';
import { vi } from 'vitest';
import { Notifications } from '.';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';

vi.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<Notifications />', () => {
  const defaultGreeting = "Got any questions? I'm happy to help.";
  const timeoutMessage = /Your session has ended/;
  const unableToConnectText = /Unable to connect/;
  const customRender = () => render(<Notifications />);

  describe('when the scene is disconnected', () => {
    beforeEach(() => {
      vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.DISCONNECTED,
      });
    });

    it('renders the default greeting', () => {
      const { queryByText } = render(<Notifications />);
      expect(queryByText(defaultGreeting)).toBeInTheDocument();
    });

    it('does not render a timeout message', () => {
      const { queryByText } = customRender();
      expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
    });

    it('does not render a "unable to connect" message', () => {
      const { queryByText } = render(<Notifications />);
      expect(queryByText(unableToConnectText)).not.toBeInTheDocument();
    });

    describe('when a greeting is provided', () => {
      const customGreeting = 'My custom greeting';

      it('renders the custom greeting', () => {
        const { queryByText } = render(<Notifications greeting={customGreeting} />);
        expect(queryByText(customGreeting)).toBeInTheDocument();
      });

      it('does not render the default greeting', () => {
        const { queryByText } = render(<Notifications greeting={customGreeting} />);
        expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
      });
    });

    describe('when a timeout occurs', () => {
      beforeEach(() => {
        vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: ConnectionStatus.TIMED_OUT,
        });
      });

      it('renders a timeout message', () => {
        const { queryByText } = customRender();
        expect(queryByText(timeoutMessage)).toBeInTheDocument();
      });

      it('calls connect() when the connect button is clicked', async () => {
        const { getByText } = customRender();
        await fireEvent.click(getByText('Connect'));

        expect(SoulMachinesContext.useSoulMachines().connect).toHaveBeenCalled();
      });
    });
  });

  describe('when the scene is connecting', () => {
    beforeEach(() => {
      vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.CONNECTING,
      });
    });

    it('does not render a greeting', () => {
      const { queryByText } = customRender();
      expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
    });

    it('does not render a timeout message', () => {
      const { queryByText } = customRender();
      expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
    });

    it('does not render "unable to connect" text', () => {
      const { queryByText } = customRender();
      expect(queryByText(unableToConnectText)).not.toBeInTheDocument();
    });
  });

  describe('when the scene is connected', () => {
    beforeEach(() => {
      vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.CONNECTED,
      });
    });

    it('does not render a greeting', () => {
      const { queryByText } = customRender();
      expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
    });

    it('does not render a timeout message', () => {
      const { queryByText } = customRender();
      expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
    });

    it('does not render "unable to connect" text', () => {
      const { queryByText } = customRender();
      expect(queryByText(unableToConnectText)).not.toBeInTheDocument();
    });
  });

  describe('when an error occurs', () => {
    beforeEach(() => {
      vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.ERRORED,
        connectionError: new Error('API Key is invalid'),
      });
    });

    it('renders a "unable to connect" text', () => {
      const { queryByText } = customRender();
      expect(queryByText(unableToConnectText)).toBeInTheDocument();
    });

    it('renders the error message', () => {
      const { queryByText } = customRender();
      expect(queryByText(/API Key is invalid/)).toBeInTheDocument();
    });

    it('does not render the default greeting', () => {
      const { queryByText } = customRender();
      expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
    });

    it('does not render a timeout message', () => {
      const { queryByText } = customRender();
      expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
    });
  });
});

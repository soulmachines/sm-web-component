import { fireEvent, render } from '@testing-library/preact';
import { Widget } from '.';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { ConnectionStatus, SessionDataKeys, widgetPosition } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<Widget />', () => {
  const defaultGreeting = "Got any questions? I'm happy to help.";
  const timeoutMessage = /Your session has ended/;
  const unableToConnectMessage = /Unable to connect/;
  const customRender = ({ position }: { position?: widgetPosition } = {}) =>
    render(<Widget position={position} />);

  describe('positioning', () => {
    describe('rendering in the bottom right corner', () => {
      it('renders a sm-right-0 class', () => {
        const { container } = customRender();
        expect(container.querySelector('.sm-right-0')).toBeInTheDocument();
      });

      it('does not render a sm-left-0 class', () => {
        const { container } = customRender();
        expect(container.querySelector('.sm-left-0')).not.toBeInTheDocument();
      });

      it('does not render a sm-flex-row-reverse class', () => {
        const { container } = customRender();
        expect(container.querySelector('.sm-flex-row-reverse')).not.toBeInTheDocument();
      });
    });

    describe('rendering in the bottom left corner', () => {
      it('renders a sm-left-0 class', () => {
        const { container } = customRender({ position: widgetPosition.BOTTOM_LEFT });
        expect(container.querySelector('.sm-left-0')).toBeInTheDocument();
      });

      it('does renders a sm-flex-row-reverse class', () => {
        const { container } = customRender({ position: widgetPosition.BOTTOM_LEFT });
        expect(container.querySelector('.sm-flex-row-reverse')).toBeInTheDocument();
      });

      it('does not render a sm-right-0 class', () => {
        const { container } = customRender({ position: widgetPosition.BOTTOM_LEFT });
        expect(container.querySelector('.sm-right-0')).not.toBeInTheDocument();
      });
    });
  });

  describe('When connecting for the first time', () => {
    it('does not connect automatically', () => {
      expect(SoulMachinesContext.useSoulMachines().connect).toBeCalledTimes(0);
    });

    it('calls connect when the button is clicked', async () => {
      const { getByTitle } = customRender();
      const button = getByTitle('Digital person');

      await fireEvent.click(button);

      expect(SoulMachinesContext.useSoulMachines().connect).toBeCalledTimes(1);
    });
  });

  describe('When resuming a session by using the sm-session-id in session storage', () => {
    it('calls connect automatically', () => {
      sessionStorage.setItem(SessionDataKeys.sessionId, 'xxx-xxx-xxx');
      customRender();
      expect(SoulMachinesContext.useSoulMachines().connect).toBeCalledTimes(1);
    });
  });

  describe('when the scene is disconnected', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.DISCONNECTED,
      });
    });

    it('renders a default greeting', () => {
      const { queryByText } = customRender();
      expect(queryByText(defaultGreeting)).toBeInTheDocument();
    });

    it('renders a svg of a digital person', () => {
      const { getByTitle } = customRender();
      expect(getByTitle('Digital person')).toBeInTheDocument();
    });

    it('renders a video', () => {
      const { container } = customRender();
      expect(container.querySelector('video')).toBeInTheDocument();
    });

    it('does not render a loading indicator', () => {
      const { queryByRole } = customRender();
      expect(queryByRole('progressbar')).not.toBeInTheDocument();
    });

    it('does not render a disconnect button', () => {
      const { queryByTitle } = customRender();
      expect(queryByTitle('Close video')).not.toBeInTheDocument();
    });

    describe('when a custom profile image is provided', () => {
      it('renders the image', () => {
        const src = 'My mock profile url';
        const { getByText } = render(<Widget profilePicture={src} />);
        expect(getByText('Digital person')).toBeInTheDocument();
      });

      it('does not render a default svg image', () => {
        const { getByTitle } = customRender();
        expect(getByTitle('Digital person')).toBeInTheDocument();
      });
    });
  });

  describe('when the scene is connecting', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.CONNECTING,
      });
    });

    it('renders a loading indicator', () => {
      const { queryByRole } = customRender();
      expect(queryByRole('progressbar')).toBeInTheDocument();
    });

    it('does not render a disconnect button', () => {
      const { queryByTitle } = customRender();
      expect(queryByTitle('Close video')).not.toBeInTheDocument();
    });

    it('renders a video', () => {
      const { container } = customRender();
      expect(container.querySelector('video')).toBeInTheDocument();
    });

    it('does not render the default greeting', () => {
      const { queryByText } = customRender();
      expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
    });

    it('does not render a timeout message', () => {
      const { queryByText } = customRender();
      expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
    });

    it('does not render a "unable to connect" message', () => {
      const { queryByText } = customRender();
      expect(queryByText(unableToConnectMessage)).not.toBeInTheDocument();
    });
  });

  describe('when the scene is connected', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.CONNECTED,
      });
    });

    it('renders a video', () => {
      const { container } = customRender();
      expect(container.querySelector('video')).toBeInTheDocument();
    });

    it('renders a disconnect button', () => {
      const { queryByTitle } = customRender();
      expect(queryByTitle('Close video')).toBeInTheDocument();
    });

    it('does not render a loading indicator', () => {
      const { queryByRole } = customRender();
      expect(queryByRole('progressbar')).not.toBeInTheDocument();
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

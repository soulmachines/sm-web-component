import { fireEvent, render } from '@testing-library/preact';
import { Widget } from '.';

const mockConnect = jest.fn();
let mockIsConnecting: boolean;
let mockIsConnected: boolean;
let mockIsTimedOut: boolean;

jest.mock('../../contexts/SoulMachinesContext', () => ({
  useSoulMachines: () => ({
    connect: mockConnect,
    isConnecting: mockIsConnecting,
    isConnected: mockIsConnected,
    isTimedOut: mockIsTimedOut,
    scene: {
      isConnected: jest.fn(),
      videoElement: {
        srcObject: 'mock video src',
      },
    },
  }),
}));

describe('<Widget />', () => {
  const defaultGreeting = "Got any questions? I'm happy to help.";
  const timeoutMessage = /Your session has ended/;

  it('does not connect automatically', () => {
    expect(mockConnect).toBeCalledTimes(0);
  });

  it('calls connect when the button is clicked', async () => {
    const { getByTitle } = render(<Widget />);
    const button = getByTitle('Digital person');

    await fireEvent.click(button);

    expect(mockConnect).toBeCalledTimes(1);
  });

  describe('when the scene is not connected or connecting', () => {
    beforeEach(() => {
      mockIsConnecting = false;
      mockIsConnected = false;
    });

    it('does not render a loading indicator', () => {
      const { queryByTitle } = render(<Widget />);
      expect(queryByTitle('Loading...')).not.toBeInTheDocument();
    });

    it('does not render a disconnect button', () => {
      const { queryByTitle } = render(<Widget />);
      expect(queryByTitle('Close video')).not.toBeInTheDocument();
    });

    it('does not render a video', () => {
      const { container } = render(<Widget />);
      expect(container.querySelector('video')).not.toBeInTheDocument();
    });

    it('does not render a timeout message', () => {
      const { queryByText } = render(<Widget />);
      expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
    });

    it('renders a profile image when profilePicture is provided', () => {
      const src = 'My mock profile url';
      const { getByAltText } = render(<Widget profilePicture={src} />);
      expect(getByAltText('Digital person')).toHaveAttribute('src', src);
    });

    it('renders a default profile svg when profilePicture not provided', () => {
      const { getByTitle } = render(<Widget />);
      expect(getByTitle('Digital person')).toBeInTheDocument();
    });

    describe('when a greeting is provided', () => {
      const customGreeting = 'My custom greeting';

      it('renders the custom greeting', () => {
        const { queryByText } = render(<Widget greeting={customGreeting} />);
        expect(queryByText(customGreeting)).toBeInTheDocument();
      });

      it('does not render the default greeting', () => {
        const { queryByText } = render(<Widget greeting={customGreeting} />);
        expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
      });
    });

    describe('when a greeting is not provided', () => {
      it('renders the default greeting', () => {
        const { queryByText } = render(<Widget />);
        expect(queryByText(defaultGreeting)).toBeInTheDocument();
      });
    });

    describe('when a timeout occurs', () => {
      beforeEach(() => {
        mockIsTimedOut = true;
      });

      it('renders a timeout message', () => {
        const { queryByText } = render(<Widget />);
        expect(queryByText(timeoutMessage)).toBeInTheDocument();
      });

      it('calls connect() when the connect button is clicked', async () => {
        const { getByText } = render(<Widget />);
        await fireEvent.click(getByText('Connect'));

        expect(mockConnect).toHaveBeenCalled();
      });
    });
  });

  describe('when the scene is connecting', () => {
    beforeEach(() => {
      mockIsConnecting = true;
      mockIsConnected = false;
    });

    it('renders a loading indicator', () => {
      const { queryByTitle } = render(<Widget />);
      expect(queryByTitle('Loading...')).toBeInTheDocument();
    });

    it('renders a disconnect button', () => {
      const { queryByTitle } = render(<Widget />);
      expect(queryByTitle('Close video')).toBeInTheDocument();
    });

    it('does not render a video', () => {
      const { container } = render(<Widget />);
      expect(container.querySelector('video')).not.toBeInTheDocument();
    });

    it('does not render the default greeting', () => {
      const { queryByText } = render(<Widget />);
      expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
    });

    it('does not render a timeout message', () => {
      const { queryByText } = render(<Widget />);
      expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
    });
  });

  describe('when the scene is connected', () => {
    beforeEach(() => {
      mockIsConnecting = false;
      mockIsConnected = true;
    });

    it('renders a video', () => {
      const { container } = render(<Widget />);
      expect(container.querySelector('video')).toBeInTheDocument();
    });

    it('renders a disconnect button', () => {
      const { queryByTitle } = render(<Widget />);
      expect(queryByTitle('Close video')).toBeInTheDocument();
    });

    it('does not render a loading indicator', () => {
      const { queryByTitle } = render(<Widget />);
      expect(queryByTitle('Loading...')).not.toBeInTheDocument();
    });

    it('does not render the default greeting', () => {
      const { queryByText } = render(<Widget />);
      expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
    });

    it('does not render a timeout message', () => {
      const { queryByText } = render(<Widget />);
      expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
    });
  });
});

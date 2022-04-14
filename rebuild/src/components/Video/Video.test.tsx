import { render } from '@testing-library/preact';
import { Video } from '.';

let mockIsConnecting: boolean;
let mockIsConnected: boolean;
const mockConnect = jest.fn();

jest.mock('../../contexts/SoulMachinesContext', () => ({
  useSoulMachines: () => ({
    isConnecting: mockIsConnecting,
    isConnected: mockIsConnected,
    connect: mockConnect,
    scene: {
      videoElement: {
        srcObject: 'mock video src',
      },
    },
  }),
}));

describe('<Video />', () => {
  const customRender = (props = { autoConnect: true }) => {
    return render(<Video {...props} />);
  };

  it('calls connect once when autoConnect is set to true', () => {
    customRender({ autoConnect: true });
    expect(mockConnect).toHaveBeenCalledTimes(1);
  });

  it('does not call connect when autoConnect is set to false', () => {
    customRender({ autoConnect: false });
    expect(mockConnect).not.toHaveBeenCalled();
  });

  describe('when it is not connecting or connected', () => {
    beforeEach(() => {
      mockIsConnecting = false;
      mockIsConnected = false;
    });

    it('renders nothing', () => {
      const { container } = customRender();
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when it is connecting', () => {
    beforeEach(() => {
      mockIsConnecting = true;
    });

    it('renders the default svg loading indicator', () => {
      const { container } = customRender();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('renders a custom loading indicator', () => {
      const { getByText } = render(
        <Video autoConnect={true} loadingIndicator={<p>Loading...</p>} />,
      );
      expect(getByText('Loading...')).toBeInTheDocument();
    });

    it('does not render a video', () => {
      const { container } = customRender();
      expect(container.querySelector('video')).not.toBeInTheDocument();
    });
  });

  describe('when it is connected', () => {
    beforeEach(() => {
      mockIsConnecting = false;
      mockIsConnected = true;
    });

    it('sets the video srcObject to be the srcObject from scene.video', () => {
      const { container } = customRender();
      const video = container.querySelector('video');
      expect(video?.srcObject).toEqual('mock video src');
    });

    it('renders a video', () => {
      const { container } = customRender();
      expect(container.querySelector('video')).toBeInTheDocument();
    });

    it('does not render the default svg loading indicator', () => {
      const { container } = customRender();
      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });
  });
});

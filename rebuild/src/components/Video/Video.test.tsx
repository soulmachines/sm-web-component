import { render } from '@testing-library/preact';
import useResizeObserver from '@bedrock-layout/use-resize-observer';
import { Video } from '.';
import { updateVideoBounds } from './Video';
import { Scene } from '@soulmachines/smwebsdk';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../hooks/useConnection';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');
jest.mock('@bedrock-layout/use-resize-observer');

describe('<Video />', () => {
  const customRender = (props = { autoConnect: true }) => {
    return render(<Video {...props} />);
  };

  it('calls connect once when autoConnect is set to true', () => {
    customRender({ autoConnect: true });
    expect(SoulMachinesContext.useSoulMachines().connect).toHaveBeenCalledTimes(1);
  });

  it('does not call connect when autoConnect is set to false', () => {
    customRender({ autoConnect: false });
    expect(SoulMachinesContext.useSoulMachines().connect).not.toHaveBeenCalled();
  });

  describe('when it is disconnected', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.DISCONNECTED,
      });
    });

    it('renders nothing', () => {
      const { container } = customRender();
      expect(container).toBeEmptyDOMElement();
    });

    it('calls useResizeObserver with a function', () => {
      customRender();
      expect(useResizeObserver).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe('when it is connecting', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.CONNECTING,
      });
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
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.CONNECTED,
      });
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

describe('updateVideoBounds()', () => {
  const width = 111.342;
  const height = 222;
  const mockScene = { sendVideoBounds: jest.fn() } as unknown as Scene;
  const mockMeasurements = {
    contentRect: { width, height },
  } as unknown as ResizeObserverEntry;

  it('calls scene.sendVideoBounds with the width/height, multiplying the values by the devicePixelRatio and rounding the number', () => {
    window.devicePixelRatio = 2;
    updateVideoBounds(mockScene, mockMeasurements);
    expect(mockScene.sendVideoBounds).toHaveBeenCalledWith(223, 444);
  });
});

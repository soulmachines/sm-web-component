import { render } from '@testing-library/preact';
import useDimensions from 'react-cool-dimensions';
import { Video } from '.';
import { updateVideoBounds } from './Video';
import { Scene } from '@soulmachines/smwebsdk';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

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

    it('renders a video', () => {
      const { container } = customRender();
      expect(container.querySelector('video')).toBeInTheDocument();
    });

    it('calls useResizeObserver with a onResize function', () => {
      customRender();
      expect(useDimensions).toHaveBeenCalledWith({
        onResize: expect.any(Function),
      });
    });
  });

  describe('when it is connecting', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.CONNECTING,
      });
    });

    it('renders no loader when not passed in', () => {
      const { container } = render(<Video autoConnect={true} />);
      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });

    it('renders a custom loading indicator', () => {
      const { getByText } = render(
        <Video autoConnect={true} loadingIndicator={<p>Loading...</p>} />,
      );
      expect(getByText('Loading...')).toBeInTheDocument();
    });

    it('renders a video', () => {
      const { container } = customRender();
      expect(container.querySelector('video')).toBeInTheDocument();
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

    it('sets video muted to true whenn isVideoMuted is true', () => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        isVideoMuted: true,
      });

      const { container } = customRender();
      expect(container.querySelector('video')?.muted).toEqual(true);
    });

    it('sets video muted to false when isVideoMuted is false', () => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        isVideoMuted: false,
      });

      const { container } = customRender();
      expect(container.querySelector('video')?.muted).toEqual(false);
    });
  });
});

describe('updateVideoBounds()', () => {
  const width = 111.342;
  const height = 222;
  const mockScene = { sendVideoBounds: jest.fn() } as unknown as Scene;
  const mockMeasurements = { width, height };

  it('calls scene.sendVideoBounds with the width/height, multiplying the values by the devicePixelRatio and rounding the number', () => {
    window.devicePixelRatio = 2;
    updateVideoBounds(mockScene, mockMeasurements);
    expect(mockScene.sendVideoBounds).toHaveBeenCalledWith(223, 444);
  });

  it('does not call updateVideoBounds if a resize event occurs with a width of 0', () => {
    updateVideoBounds(mockScene, { ...mockMeasurements, width: 0.2 });
    expect(mockScene.sendVideoBounds).not.toHaveBeenCalled();
  });

  it('does not call updateVideoBounds if a resize event occurs with a height of 0', () => {
    updateVideoBounds(mockScene, { ...mockMeasurements, height: 0 });
    expect(mockScene.sendVideoBounds).not.toHaveBeenCalled();
  });
});

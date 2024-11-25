import { fireEvent, render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import { VideoControls } from '.';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { widgetLayout } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<VideoControls />', () => {
  const customRender = () => render(<VideoControls />);

  it('should not have any accessibility violations', async () => {
    const { container } = customRender();
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the conversation state indicator', () => {
    const { getByText } = customRender();
    expect(getByText('Digital Person Waiting')).toBeInTheDocument();
  });

  it('calls disconnect when the disconnect button is clicked', async () => {
    const { getByTitle } = customRender();
    const button = getByTitle('Close video');

    await fireEvent.click(button);

    expect(SoulMachinesContext.useSoulMachines().disconnect).toBeCalledTimes(1);
  });

  describe('on the initial render', () => {
    it('does not call disconnect', () => {
      customRender();
      expect(SoulMachinesContext.useSoulMachines().disconnect).toBeCalledTimes(0);
    });

    it('does not call toggleMicrophone', () => {
      customRender();
      expect(SoulMachinesContext.useSoulMachines().toggleMicrophone).toBeCalledTimes(0);
    });

    it('does not call toggleCamera', () => {
      customRender();
      expect(SoulMachinesContext.useSoulMachines().toggleCamera).toBeCalledTimes(0);
    });

    it('does not call toggleVideoMuted', () => {
      customRender();
      expect(SoulMachinesContext.useSoulMachines().toggleVideoMuted).toBeCalledTimes(0);
    });

    it('does not call toggleLayout', () => {
      customRender();
      expect(SoulMachinesContext.useSoulMachines().toggleLayout).toBeCalledTimes(0);
    });
  });

  describe('when microphone is disabled', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        isMicrophoneEnabled: false,
      });
    });

    it('calls toggleMicrophone when the enable button is clicked', async () => {
      const { getByTitle } = customRender();
      const enableButton = getByTitle('Enable microphone');
      await fireEvent.click(enableButton);

      expect(SoulMachinesContext.useSoulMachines().toggleMicrophone).toBeCalledTimes(1);
    });
  });

  describe('when microphone is enabled', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        isMicrophoneEnabled: true,
      });
    });

    it('calls toggleMicrophone when the disable button is clicked', async () => {
      const { getByTitle } = customRender();
      const disableButton = getByTitle('Disable microphone');
      await fireEvent.click(disableButton);

      expect(SoulMachinesContext.useSoulMachines().toggleMicrophone).toBeCalledTimes(1);
    });
  });

  describe('when camera is disabled', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        isCameraEnabled: false,
      });
    });

    it('calls toggleCamera when the enable button is clicked', async () => {
      const { getByTitle } = customRender();
      const enableButton = getByTitle('Enable camera');
      await fireEvent.click(enableButton);

      expect(SoulMachinesContext.useSoulMachines().toggleCamera).toBeCalledTimes(1);
    });
  });

  describe('when camera is enabled', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        isCameraEnabled: true,
      });
    });

    it('calls toggleCamera when the disable button is clicked', async () => {
      const { getByTitle } = customRender();
      const disableButton = getByTitle('Disable camera');
      await fireEvent.click(disableButton);

      expect(SoulMachinesContext.useSoulMachines().toggleCamera).toBeCalledTimes(1);
    });
  });

  describe('when video is muted', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        isVideoMuted: true,
      });
    });

    it('calls toggleVideoMuted when the unmute button is clicked', async () => {
      const { getByTitle } = customRender();
      const unmuteButton = getByTitle('Unmute video');
      await fireEvent.click(unmuteButton);

      expect(SoulMachinesContext.useSoulMachines().toggleVideoMuted).toBeCalledTimes(1);
    });
  });

  describe('when video is unmuted', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        isVideoMuted: false,
      });
    });

    it('calls toggleVideoMuted when the mute button is clicked', async () => {
      const { getByTitle } = customRender();
      const muteButton = getByTitle('Mute video');
      await fireEvent.click(muteButton);

      expect(SoulMachinesContext.useSoulMachines().toggleVideoMuted).toBeCalledTimes(1);
    });
  });

  // describe('when layout is float layout', () => {
  //   beforeEach(() => {
  //     jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
  //       ...SoulMachinesContext.useSoulMachines(),
  //       layout: widgetLayout.FLOAT,
  //     });
  //   });

  //   it('renders a fullframe layout button', () => {
  //     const { getByTitle } = customRender();
  //     expect(getByTitle('Switch to fullframe layout')).toBeInTheDocument();
  //   });

  //   it('does not renders a float layout button', () => {
  //     const { queryByTitle } = customRender();
  //     expect(queryByTitle('Switch to float layout')).not.toBeInTheDocument();
  //   });

  //   it('calls toggleLayout when switch to fullframe layout button is clicked', async () => {
  //     const { getByTitle } = customRender();
  //     const fullframeButton = getByTitle('Switch to fullframe layout');
  //     await fireEvent.click(fullframeButton);

  //     expect(SoulMachinesContext.useSoulMachines().toggleLayout).toBeCalledTimes(1);
  //   });
  // });

  // describe('when layout is fullFrame layout', () => {
  //   beforeEach(() => {
  //     jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
  //       ...SoulMachinesContext.useSoulMachines(),
  //       layout: widgetLayout.FULL_FRAME,
  //     });
  // });

  //   it('renders a float layout button', () => {
  //     const { getByTitle } = customRender();
  //     expect(getByTitle('Switch to float layout')).toBeInTheDocument();
  //   });

  //   it('does not renders a fullframe layout button', () => {
  //     const { queryByTitle } = customRender();
  //     expect(queryByTitle('Switch to fullframe layout')).not.toBeInTheDocument();
  //   });

  //   it('calls toggleLayout when switch to float layout button is clicked', async () => {
  //     const { getByTitle } = customRender();
  //     const floatButton = getByTitle('Switch to float layout');
  //     await fireEvent.click(floatButton);

  //      expect(SoulMachinesContext.useSoulMachines().toggleLayout).toBeCalledTimes(1);
  //    });
  // });
});

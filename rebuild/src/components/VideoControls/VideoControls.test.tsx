import { fireEvent, render } from '@testing-library/preact';
import { VideoControls } from '.';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';

const mockToggleMicrophone = jest.fn();
const mockToggleCamera = jest.fn();
let mockIsMicrophoneEnabled: boolean;
let mockIsCameraEnabled: boolean;

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

jest.mock('../../hooks/useSMMedia', () => ({
  useSMMedia: () => ({
    isMicrophoneEnabled: mockIsMicrophoneEnabled,
    isCameraEnabled: mockIsCameraEnabled,
    toggleMicrophone: mockToggleMicrophone,
    toggleCamera: mockToggleCamera,
  }),
}));

describe('<VideoControls />', () => {
  const customRender = () => render(<VideoControls />);

  it('calls disconnect when the disconnect button is clicked', async () => {
    const { getByTitle } = customRender();
    const button = getByTitle('Close video');

    await fireEvent.click(button);

    expect(useSoulMachines().disconnect).toBeCalledTimes(1);
  });

  describe('on the initial render', () => {
    it('does not call disconnect', () => {
      customRender();
      expect(useSoulMachines().disconnect).toBeCalledTimes(0);
    });

    it('does not call toggleMicrophone', () => {
      customRender();
      expect(mockToggleMicrophone).toBeCalledTimes(0);
    });

    it('does not call toggleCamera', () => {
      customRender();
      expect(mockToggleCamera).toBeCalledTimes(0);
    });
  });

  describe('when microphone is disabled', () => {
    beforeEach(() => {
      mockIsMicrophoneEnabled = false;
    });

    it('calls toggleMicrophone when the enable button is clicked', async () => {
      const { getByTitle } = customRender();
      const enableButton = getByTitle('Enable microphone');
      await fireEvent.click(enableButton);

      expect(mockToggleMicrophone).toBeCalledTimes(1);
    });
  });

  describe('when microphone is enabled', () => {
    beforeEach(() => {
      mockIsMicrophoneEnabled = true;
    });

    it('calls toggleMicrophone when the disable button is clicked', async () => {
      const { getByTitle } = customRender();
      const disableButton = getByTitle('Disable microphone');
      await fireEvent.click(disableButton);

      expect(mockToggleMicrophone).toBeCalledTimes(1);
    });
  });

  describe('when camera is disabled', () => {
    beforeEach(() => {
      mockIsCameraEnabled = false;
    });

    it('calls toggleCamera when the enable button is clicked', async () => {
      const { getByTitle } = customRender();
      const enableButton = getByTitle('Enable camera');
      await fireEvent.click(enableButton);

      expect(mockToggleCamera).toBeCalledTimes(1);
    });
  });

  describe('when camera is enabled', () => {
    beforeEach(() => {
      mockIsCameraEnabled = true;
    });

    it('calls toggleCamera when the disable button is clicked', async () => {
      const { getByTitle } = customRender();
      const disableButton = getByTitle('Disable camera');
      await fireEvent.click(disableButton);

      expect(mockToggleCamera).toBeCalledTimes(1);
    });
  });
});

import { fireEvent, render } from '@testing-library/preact';
import { VideoControls } from '.';

const mockDisconnect = jest.fn();
const mockToggleMicrophone = jest.fn();
let mockIsMicrophoneEnabled: boolean;

jest.mock('../../contexts/SoulMachinesContext', () => ({
  useSoulMachines: () => ({
    disconnect: mockDisconnect,
  }),
}));

jest.mock('../../contexts/SoulMachinesMedia', () => ({
  useSMMedia: () => ({
    isMicrophoneEnabled: mockIsMicrophoneEnabled,
    toggleMicrophone: mockToggleMicrophone,
  }),
}));

describe('<VideoControls />', () => {
  it('does not call disconnect on the initial render', () => {
    render(<VideoControls />);

    expect(mockDisconnect).toBeCalledTimes(0);
  });

  it('does not call toggleMicrophone on the initial render', () => {
    render(<VideoControls />);

    expect(mockToggleMicrophone).toBeCalledTimes(0);
  });

  it('calls disconnect when the disconnect button is clicked', async () => {
    const { getByTitle } = render(<VideoControls />);
    const button = getByTitle('Close video');

    await fireEvent.click(button);

    expect(mockDisconnect).toBeCalledTimes(1);
  });

  describe('when microphone is disabled', () => {
    beforeEach(() => {
      mockIsMicrophoneEnabled = false;
    });

    it('calls toggleMicrophone when the enable button is clicked', async () => {
      const { getByTitle } = render(<VideoControls />);
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
      const { getByTitle } = render(<VideoControls />);
      const disableButton = getByTitle('Disable microphone');
      await fireEvent.click(disableButton);

      expect(mockToggleMicrophone).toBeCalledTimes(1);
    });
  });
});

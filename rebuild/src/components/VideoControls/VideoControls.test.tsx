import { fireEvent, render } from '@testing-library/preact';
import { VideoControls } from '.';

const mockDisconnect = jest.fn();

jest.mock('../../contexts/SoulMachinesContext', () => ({
  useSoulMachines: () => ({
    disconnect: mockDisconnect,
  }),
}));

describe('<VideoControls />', () => {
  it('does not call disconnect on the initial render', () => {
    render(<VideoControls />);

    expect(mockDisconnect).toBeCalledTimes(0);
  });

  it('calls disconnect when the disconnect button is clicked', async () => {
    const { getByTitle } = render(<VideoControls />);
    const button = getByTitle('Close video');

    await fireEvent.click(button);

    expect(mockDisconnect).toBeCalledTimes(1);
  });
});

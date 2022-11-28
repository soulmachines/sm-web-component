import { fireEvent, render } from '@testing-library/preact';
import { useSoulMachines } from '../../../../contexts/SoulMachinesContext';
import { ConnectButton } from './ConnectButton';

jest.mock('../../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<ConnectButton />', () => {
  it('does not call connect by default', () => {
    const { connect } = useSoulMachines();
    render(<ConnectButton>Click me</ConnectButton>);

    expect(connect).not.toHaveBeenCalled();
  });

  it('calls connect when clicked', async () => {
    const { connect } = useSoulMachines();
    const { getByText } = render(<ConnectButton>Click me</ConnectButton>);
    const button = getByText('Click me');

    await fireEvent.click(button);
    expect(connect).toHaveBeenCalled();
  });

  it('renders button with an aria-label', () => {
    const { getByLabelText } = render(<ConnectButton>Click me</ConnectButton>);
    expect(getByLabelText('Talk to a Digital Person', { selector: 'button' })).toBeInTheDocument();
  });
});

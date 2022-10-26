import { ConnectionStateData, ConnectionStateTypes } from '@soulmachines/smwebsdk';
import { render } from '@testing-library/preact';
import { ProgressIndicator } from './ProgressIndicator';

jest.mock('../../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<ProgressIndicator />', () => {
  const connectionState: ConnectionStateData = {
    name: ConnectionStateTypes.Connected,
    currentStep: 1,
    totalSteps: 2,
    percentageLoaded: 50,
  };

  it('renders a loading indicator', () => {
    const { queryByRole } = render(<ProgressIndicator connectionState={connectionState} />);
    expect(queryByRole('progressbar')).toBeInTheDocument();
  });

  it('renders a custom indicator when passed in', () => {
    const { queryByText } = render(
      <ProgressIndicator indicator={<p>Mock indicator</p>} connectionState={connectionState} />,
    );
    expect(queryByText('Mock indicator')).toBeInTheDocument();
  });
});

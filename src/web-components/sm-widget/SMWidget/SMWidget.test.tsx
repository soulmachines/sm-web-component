import { render } from '@testing-library/preact';
import { SMWidget } from '.';
import * as SoulMachinesContext from '../../../contexts/SoulMachinesContext/SoulMachinesContext';
import { ConnectionStatus } from '../../../enums';

jest.mock('../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<SMWidget />', () => {
  const mockParent = document.createElement('div');
  const customRender = () =>
    render(<SMWidget apiKey="123" connecting-indicator={<p>Loading...</p>} parent={mockParent} />);

  it('renders a loading indicator when connecting', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.CONNECTING,
    });

    const { queryByRole } = customRender();
    expect(queryByRole('progressbar')).toBeInTheDocument();
  });

  it('renders a video when connected', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.CONNECTED,
    });

    const { container } = customRender();
    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('renders a greeting when it is disconnected', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.DISCONNECTED,
    });

    const { getByText } = customRender();
    expect(getByText("Got any questions? I'm happy to help.")).toBeInTheDocument();
  });
});

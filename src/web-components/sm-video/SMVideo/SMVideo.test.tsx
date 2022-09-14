import { render } from '@testing-library/preact';
import { SMVideo } from '.';
import * as SoulMachinesContext from '../../../contexts/SoulMachinesContext/SoulMachinesContext';
import { ConnectionStatus } from '../../../enums';

jest.mock('../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<SMVideo />', () => {
  const customRender = () =>
    render(<SMVideo autoConnect="true" apiKey="123" connecting-indicator={<p>Loading...</p>} />);

  it('renders a loading indicator when connecting', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.CONNECTING,
    });

    const { getByText } = customRender();

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders a video when connected', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.CONNECTED,
    });

    const { container } = customRender();
    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('renders a video when it is disconnected', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.DISCONNECTED,
    });

    const { container } = customRender();
    expect(container.querySelector('video')).toBeInTheDocument();
  });
});

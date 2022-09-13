import { render } from '@testing-library/preact';
import { vi } from 'vitest';
import { SMVideo } from '.';
import * as SoulMachinesContext from '../../../contexts/SoulMachinesContext/SoulMachinesContext';
import { ConnectionStatus } from '../../../enums';

vi.mock('../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<SMVideo />', () => {
  const customRender = () =>
    render(<SMVideo autoConnect="true" apiKey="123" connecting-indicator={<p>Loading...</p>} />);

  it('renders a loading indicator when connecting', () => {
    vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.CONNECTING,
    });

    const { getByText } = customRender();

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders a video when connected', () => {
    vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.CONNECTED,
    });

    const { container } = customRender();
    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('renders a video when it is disconnected', () => {
    vi.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.DISCONNECTED,
    });

    const { container } = customRender();
    expect(container.querySelector('video')).toBeInTheDocument();
  });
});

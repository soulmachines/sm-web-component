import { render } from '@testing-library/preact';
import { SMWidget } from '.';
import * as SoulMachinesContext from '../../../contexts/SoulMachinesContext/SoulMachinesContext';

jest.mock('../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<SMWidget />', () => {
  const customRender = () =>
    render(<SMWidget apiKey="123" connecting-indicator={<p>Loading...</p>} />);
  it('renders a loading indicator when connecting', () => {
    jest
      .spyOn(SoulMachinesContext, 'useSoulMachines')
      .mockReturnValue({ ...SoulMachinesContext.useSoulMachines(), isConnecting: true });

    const { getByText } = customRender();
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders a video when connected', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      isConnecting: false,
      isConnected: true,
    });

    const { container } = customRender();
    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('renders a greeting when it is not connecting or connected', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      isConnecting: false,
      isConnected: false,
    });

    const { getByText } = customRender();
    expect(getByText("Got any questions? I'm happy to help.")).toBeInTheDocument();
  });
});

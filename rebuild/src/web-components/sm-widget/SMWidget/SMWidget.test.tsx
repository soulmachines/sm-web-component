import { render } from '@testing-library/preact';
import { SMWidget } from '.';
import * as SoulMachinesContext from '../../../contexts/SoulMachinesContext/SoulMachinesContext';
import { useSoulMachinesDefaults } from '../../../contexts/SoulMachinesContext/__mocks__/SoulMachinesContext';

jest.mock('../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<SMWidget />', () => {
  it('renders a loading indicator when connecting', () => {
    jest
      .spyOn(SoulMachinesContext, 'useSoulMachines')
      .mockReturnValue({ ...useSoulMachinesDefaults, isConnecting: true });

    const { getByText } = render(
      <SMWidget apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders a video when connected', () => {
    jest
      .spyOn(SoulMachinesContext, 'useSoulMachines')
      .mockReturnValue({ ...useSoulMachinesDefaults, isConnecting: false, isConnected: true });

    const { container } = render(
      <SMWidget apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('renders a greeting when it is not connecting or connected', () => {
    jest
      .spyOn(SoulMachinesContext, 'useSoulMachines')
      .mockReturnValue({ ...useSoulMachinesDefaults, isConnecting: false, isConnected: false });

    const { getByText } = render(
      <SMWidget apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );
    expect(getByText("Got any questions? I'm happy to help.")).toBeInTheDocument();
  });
});

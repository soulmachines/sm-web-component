import { render } from '@testing-library/preact';
import { SMVideo } from '.';
import * as SoulMachinesContext from '../../../contexts/SoulMachinesContext/SoulMachinesContext';
import { useSoulMachinesDefaults } from '../../../contexts/SoulMachinesContext/__mocks__/SoulMachinesContext';

jest.mock('../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<SMVideo />', () => {
  it('renders a loading indicator when connecting', () => {
    jest
      .spyOn(SoulMachinesContext, 'useSoulMachines')
      .mockReturnValue({ ...useSoulMachinesDefaults, isConnecting: true });

    const { getByText } = render(
      <SMVideo autoConnect="true" apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders a video when connected', () => {
    jest
      .spyOn(SoulMachinesContext, 'useSoulMachines')
      .mockReturnValue({ ...useSoulMachinesDefaults, isConnecting: false, isConnected: true });

    const { container } = render(
      <SMVideo autoConnect="false" apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('renders nothing when it is not connecting or connected', () => {
    jest
      .spyOn(SoulMachinesContext, 'useSoulMachines')
      .mockReturnValue({ ...useSoulMachinesDefaults, isConnecting: false, isConnected: false });

    const { container } = render(
      <SMVideo autoConnect="false" apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});

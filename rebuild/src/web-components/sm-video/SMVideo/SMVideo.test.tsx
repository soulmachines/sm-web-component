import { render } from '@testing-library/preact';
import { SMVideo } from '.';

let mockIsConnecting: boolean;
let mockIsConnected: boolean;
jest.mock('../../../contexts/SoulMachinesContext', () => {
  const { SoulMachinesProvider } = jest.requireActual('../../../contexts/SoulMachinesContext');
  return {
    SoulMachinesProvider,
    useSoulMachines: () => ({
      connect: () => null,
      isConnecting: mockIsConnecting,
      isConnected: mockIsConnected,
    }),
  };
});

describe('<SMVideo />', () => {
  it('renders a loading indicator when connecting', () => {
    mockIsConnecting = true;
    const { getByText } = render(
      <SMVideo autoConnect="true" apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders a video when connected', () => {
    mockIsConnecting = false;
    mockIsConnected = true;
    const { container } = render(
      <SMVideo autoConnect="false" apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('renders nothing when it is not connecting or connected', () => {
    mockIsConnecting = false;
    mockIsConnected = false;
    const { container } = render(
      <SMVideo autoConnect="false" apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );
    expect(container).toBeEmptyDOMElement();
  });
});

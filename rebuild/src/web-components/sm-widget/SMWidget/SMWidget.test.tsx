import { render } from '@testing-library/preact';
import { JSX } from 'preact';
import { SMWidget } from '.';

let mockIsConnecting: boolean;
let mockIsConnected: boolean;

jest.mock('../../../contexts/SoulMachinesContext', () => {
  const MockProvider = (props: { children: JSX.Element }) => props.children;
  return {
    SoulMachinesProvider: MockProvider,
    useSoulMachines: () => ({
      connect: () => null,
      isConnecting: mockIsConnecting,
      isConnected: mockIsConnected,
    }),
  };
});

describe('<SMWidget />', () => {
  it('renders a loading indicator when connecting', () => {
    mockIsConnecting = true;
    const { getByText } = render(
      <SMWidget apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders a video when connected', () => {
    mockIsConnecting = false;
    mockIsConnected = true;
    const { container } = render(
      <SMWidget apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('renders a greeting when it is not connecting or connected', () => {
    mockIsConnecting = false;
    mockIsConnected = false;
    const { getByText } = render(
      <SMWidget apiKey="123" connecting-indicator={<p>Loading...</p>} />,
    );
    expect(getByText("Got any questions? I'm happy to help.")).toBeInTheDocument();
  });
});

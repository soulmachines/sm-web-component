import { render } from '@testing-library/preact';
import { SMVideo } from '.';

describe('<SMVideo />', () => {
  it('renders a video element', () => {
    const { container } = render(<SMVideo apiKey="123" />);
    expect(container.querySelector('video')).toBeInTheDocument();
  });
});

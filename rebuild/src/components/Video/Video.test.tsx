import { render } from '@testing-library/preact';
import { Video } from '.';

describe('<Video />', () => {
  it('renders a video element', () => {
    const { container } = render(<Video />);
    expect(container.querySelector('video')).toBeInTheDocument();
  });
});

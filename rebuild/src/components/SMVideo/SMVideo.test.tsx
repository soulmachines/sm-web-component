import { render } from '@testing-library/preact';
import { SMVideo } from '.';

describe('<SMVideo />', () => {
  it('renders a loading indicator', () => {
    const { getByText } = render(<SMVideo apiKey="123" connectingIndicator={<p>Loading...</p>} />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});

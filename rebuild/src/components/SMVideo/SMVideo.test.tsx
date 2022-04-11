import { render } from '@testing-library/preact';
import { SMVideo } from '.';

jest.mock('@soulmachines/smwebsdk');

describe('<SMVideo />', () => {
  it('renders a loading indicator', () => {
    const { getByText } = render(<SMVideo apiKey="123" connecting-indicator={<p>Loading...</p>} />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});

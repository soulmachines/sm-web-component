import { render } from '@testing-library/preact';
import { Video } from '.';

describe('<Video />', () => {
  it('renders the api key next to the video text', () => {
    const { queryByText } = render(<Video apiKey="123" />);
    expect(queryByText('Video 123')).toBeInTheDocument();
  });
});

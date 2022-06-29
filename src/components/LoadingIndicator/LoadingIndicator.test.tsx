import { render } from '@testing-library/preact';
import { LoadingIndicator } from '.';

describe('<LoadingIndicator />', () => {
  it('renders a loading title', () => {
    const { getByTitle } = render(<LoadingIndicator />);
    expect(getByTitle('Loading...')).toBeInTheDocument();
  });
});

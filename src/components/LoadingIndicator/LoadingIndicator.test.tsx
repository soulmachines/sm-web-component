import { render } from '@testing-library/preact';
import { LoadingIndicator } from '.';

describe('<LoadingIndicator />', () => {
  it('renders a loading title', () => {
    const { getByTitle } = render(<LoadingIndicator />);
    expect(getByTitle('Loading...')).toBeInTheDocument();
  });

  it('renders a customized title', () => {
    const { getByTitle } = render(<LoadingIndicator title="Digital Person Thinking" />);
    expect(getByTitle('Digital Person Thinking')).toBeInTheDocument();
  });
});

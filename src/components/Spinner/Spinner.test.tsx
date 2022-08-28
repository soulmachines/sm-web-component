import { render } from '@testing-library/preact';
import { Spinner } from '.';

describe('<Spinner />', () => {
  it('renders a loading title', () => {
    const { getByTitle } = render(<Spinner />);
    expect(getByTitle('Loading...')).toBeInTheDocument();
  });

  it('renders a customized title', () => {
    const { getByTitle } = render(<Spinner title="Digital Person Thinking" />);
    expect(getByTitle('Digital Person Thinking')).toBeInTheDocument();
  });
});

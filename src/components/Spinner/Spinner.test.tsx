import { render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import { Spinner } from '.';

describe('<Spinner />', () => {
  it('should not have any accessibility violations', async () => {
    const { container } = render(<Spinner />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a loading title', () => {
    const { getByTitle } = render(<Spinner />);
    expect(getByTitle('Loading...')).toBeInTheDocument();
  });

  it('renders a customized title', () => {
    const { getByTitle } = render(<Spinner title="Digital Person Thinking" />);
    expect(getByTitle('Digital Person Thinking')).toBeInTheDocument();
  });
});

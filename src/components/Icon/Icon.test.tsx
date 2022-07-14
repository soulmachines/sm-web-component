import { render } from '@testing-library/preact';
import { Icon } from '.';

describe('<Icon />', () => {
  it('renders the name in the title when title is not supplied', () => {
    const { getByTitle } = render(<Icon name="profile" />);
    expect(getByTitle('profile')).toBeInTheDocument();
  });

  it('renders the title in the title when provided', () => {
    const { getByTitle } = render(<Icon title="Custom title" name="profile" />);
    expect(getByTitle('Custom title')).toBeInTheDocument();
  });

  it('defaults the width and height to 20px', () => {
    const { container } = render(<Icon name="profile" />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '20px');
    expect(svg).toHaveAttribute('height', '20px');
  });

  it('uses the size prop for the width and height value', () => {
    const { container } = render(<Icon name="profile" size={99} />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '99');
    expect(svg).toHaveAttribute('height', '99');
  });
});

import { render } from '@testing-library/preact';
import { ProfileImage } from '.';

describe('<ProfileImage />', () => {
  it('renders a profile image when src is provided', () => {
    const src = 'My mock profile url';
    const { getByAltText } = render(<ProfileImage src={src} />);
    expect(getByAltText('Digital person')).toHaveAttribute('src', src);
  });

  it('renders a default profile svg when src is not provided', () => {
    const { getByTitle } = render(<ProfileImage />);
    expect(getByTitle('Digital person')).toBeInTheDocument();
  });
});

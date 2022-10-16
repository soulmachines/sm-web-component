import { render } from '@testing-library/preact';
import { ProfileImage } from '.';

describe('<ProfileImage />', () => {
  describe('when a src is provided', () => {
    const src = 'My mock profile url';
    const customRender = () => render(<ProfileImage src={src} />);

    it('renders a text saying the image is a digital person', () => {
      const { getByText } = customRender();
      expect(getByText('Digital person')).toBeInTheDocument();
    });
  });

  it('renders a default profile svg when src is not provided', () => {
    const { getByTitle } = render(<ProfileImage />);
    expect(getByTitle('Digital person')).toBeInTheDocument();
  });
});

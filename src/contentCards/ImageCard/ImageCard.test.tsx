import { render } from '@testing-library/preact';
import { ImageCard } from '.';

describe('<ImageCard />', () => {
  const emptyCard = {
    id: 'mockId',
    type: 'options',
    data: {
      url: undefined,
    },
  };

  const imageCard = {
    id: 'mockId',
    type: 'image',
    data: {
      url: 'mock url',
      alt: 'mock alt text',
    },
  };

  it('renders nothing when url is not provided', () => {
    const { container } = render(<ImageCard content={emptyCard} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders an image with alt text', () => {
    const { getByRole } = render(<ImageCard content={imageCard} />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('renders alt text', () => {
    const { getByAltText } = render(<ImageCard content={imageCard} />);
    expect(getByAltText('mock alt text')).toBeInTheDocument();
  });
});

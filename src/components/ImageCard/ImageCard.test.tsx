import { fireEvent, render } from '@testing-library/preact';
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

  it('renders data-sm-content with the card id', () => {
    const { container } = render(<ImageCard content={imageCard} />);
    expect(container.querySelector('[data-sm-content="mockId"]')).toBeInTheDocument();
  });

  it('renders a dismiss button', () => {
    const { queryByTitle } = render(<ImageCard content={imageCard} />);
    expect(queryByTitle('Hide card')).toBeInTheDocument();
  });

  it('renders screen hidden alt text', () => {
    const { queryByText } = render(<ImageCard content={imageCard} />);
    expect(queryByText('mock alt text')).toBeInTheDocument();
  });
});

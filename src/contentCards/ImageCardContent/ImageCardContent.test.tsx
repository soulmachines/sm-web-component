import { render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import { ImageCardContent } from '.';

describe('<ImageCardContent />', () => {
  const emptyCard = {
    id: 'mockId',
    type: 'options',
    data: {
      url: undefined,
    },
  };

  const cardContent = {
    id: 'mockId',
    type: 'image',
    data: {
      url: 'mock url',
      alt: 'mock alt text',
    },
  };

  it('should not have any accessibility violations', async () => {
    const { container } = render(<ImageCardContent content={cardContent} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders nothing when url is not provided', () => {
    const { container } = render(<ImageCardContent content={emptyCard} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders an image with alt text', () => {
    const { getByRole } = render(<ImageCardContent content={cardContent} />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('renders alt text', () => {
    const { getByAltText } = render(<ImageCardContent content={cardContent} />);
    expect(getByAltText('mock alt text')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/preact';
import { LinkCard } from '.';

describe('<LinkCard />', () => {
  const mockCard = {
    id: 'mockId',
    type: 'externalLink',
    data: {
      url: 'https://www.soulmachines.com',
      title: 'Soul Machines',
      imageUrl: 'https://placekitten.com/300/300',
      description: 'placeholder text',
    },
  };

  it('renders data-sm-content with the card id', () => {
    const { container } = render(<LinkCard content={mockCard} isExternal={true} />);
    expect(container.querySelector('[data-sm-content="mockId"]')).toBeInTheDocument();
  });

  it('renders target=_blank when card is externalLink', () => {
    const { container } = render(<LinkCard content={mockCard} isExternal={true} />);
    expect(container.querySelector('[target="_blank"]')).toBeInTheDocument();
  });

  it('does not render target=_blank when card is internalLink', () => {
    const { container } = render(<LinkCard content={mockCard} isExternal={false} />);
    expect(container.querySelector('[target="_blank"]')).not.toBeInTheDocument();
  });

  it('renders card description', () => {
    const { getByText } = render(<LinkCard content={mockCard} isExternal={true} />);
    expect(getByText('placeholder text')).toBeInTheDocument();
  });

  it('renders card image', () => {
    const { getByRole } = render(<LinkCard content={mockCard} isExternal={true} />);
    expect(getByRole('img', { name: 'Soul Machines' })).toBeInTheDocument();
  });

  it('renders card link anchor with label', async () => {
    const { getByRole } = render(<LinkCard content={mockCard} isExternal={true} />);
    const linkButton = getByRole('link', { name: 'View Page' });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton.getAttribute('href')).toEqual('https://www.soulmachines.com');
  });

  it('renders card title', () => {
    const { getByRole } = render(<LinkCard content={mockCard} isExternal={true} />);
    expect(getByRole('heading', { level: 2, name: 'Soul Machines' })).toBeInTheDocument();
  });

  it('renders link card without description', () => {
    const mockCardNoDescription = {
      id: 'mockId',
      type: 'externalLink',
      data: {
        url: 'https://www.soulmachines.com',
        title: 'Soul Machines',
        imageUrl: 'https://placekitten.com/300/300',
      },
    };
    const { container } = render(<LinkCard content={mockCardNoDescription} isExternal={true} />);
    expect(container.querySelector('p')).not.toBeInTheDocument();
  });

  it('render link card without image', () => {
    const mockCardNoImage = {
      id: 'mockId',
      type: 'externalLink',
      data: {
        url: 'https://www.soulmachines.com',
        title: 'Soul Machines',
        description: 'placeholder text',
      },
    };
    const { container } = render(<LinkCard content={mockCardNoImage} isExternal={true} />);
    expect(container.querySelector('img')).not.toBeInTheDocument();
  });
});

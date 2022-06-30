import { render } from '@testing-library/preact';
import { LinkCard } from '.';

describe('<LinkCard />', () => {
  const mockCard = {
    id: 'mockId',
    type: 'externalLink',
    data: {
      url: 'https://www.soulmachines.com',
      title: 'Soul Machines',
      imageUrl: 'https://www.soulmachines.com/wp-content/themes/soulmachines/images/sm-logo.png',
      description: 'placeholder text',
    },
  };

  it('renders data-sm-content with the card id', () => {
    const { container } = render(<LinkCard content={mockCard} />);
    expect(container.querySelector('[data-sm-content="mockId"]')).toBeInTheDocument();
  });

  it('renders card text', () => {
    const { getByText } = render(<LinkCard content={mockCard} />);
    expect(getByText('placeholder text')).toBeInTheDocument();
  });

  it('renders card link anchor with label', async () => {
    const { getByRole } = render(<LinkCard content={mockCard}/>);
    const linkButton = getByRole('link', { name: 'Soul Machines' });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton.getAttribute('href')).toEqual('https://www.soulmachines.com');
  });

  it('renders link card without description', () => {
    const mockCardNoDescription = {
      id: 'mockId',
      type: 'externalLink',
      data: {
        url: 'https://www.soulmachines.com',
        title: 'Soul Machines',
      },
    };
    const { queryByText } = render(<LinkCard content={mockCardNoDescription} />);
    expect(queryByText('placeholder text')).not.toBeInTheDocument();
  });
});

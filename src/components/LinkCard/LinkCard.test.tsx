import { fireEvent, getByText, render } from '@testing-library/preact';
import { LinkCard } from '.';

describe('<LinkCard />', () => {
    const mockCard = {
        id: 'mockId',
        type: 'externalLink',
        data: {
            url: 'https://www.soulmachines.com',
            title: 'Soul Machines',
            imageUrl: 'https://www.soulmachines.com/wp-content/themes/soulmachines/images/sm-logo.png',
        }
    };
    
    it('renders data-sm-content with the card id', () => {
        const { container } = render(<LinkCard content={mockCard}/>);
        expect(container.querySelector('[data-sm-content="mockId"]')).toBeInTheDocument();
    });

    it('renders card with link button', () => {
        const { getByText } = render(<LinkCard content={mockCard}/>);
        const linkButton = getByText('Soul Machines');
        expect(linkButton).toBeInTheDocument();
    });

});

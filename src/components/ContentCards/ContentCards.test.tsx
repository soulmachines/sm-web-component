import { render } from '@testing-library/preact';
import { ContentCards } from '.';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ContentCard } from '@soulmachines/smwebsdk';
import { vi } from 'vitest';

vi.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<ContentCards />', () => {
  const { scene } = useSoulMachines();

  const customRender = (contentCards: ContentCard[] = []) => {
    const testUtils = render(<ContentCards />);
    scene.conversation.onCardChanged.call(contentCards);

    testUtils.rerender(<ContentCards />);

    return testUtils;
  };

  it('renders nothing by default', () => {
    const { container } = render(<ContentCards />);
    expect(container).toBeEmptyDOMElement();
  });

  it('sets conversation autoClearCards to true', () => {
    expect(scene.conversation.autoClearCards).toEqual(true);
  });

  describe('when cards are present', () => {
    it('renders nothing when the card type is not defined', () => {
      const { container } = customRender([
        {
          id: 'id',
          data: {},
        },
      ]);
      expect(container).toBeEmptyDOMElement();
    });

    it('renders nothing when the card type is unknown', () => {
      const { container } = customRender([
        {
          id: 'id',
          type: 'unknown type',
          data: {},
        },
      ]);

      expect(container).toBeEmptyDOMElement();
    });

    it('renders an each option when the card type is options', () => {
      const { getByText } = customRender([
        {
          id: 'id',
          type: 'options',
          data: {
            options: [
              {
                label: 'option one',
              },
              {
                label: 'option two',
              },
            ],
          },
        },
      ]);

      expect(getByText('option one')).toBeInTheDocument();
      expect(getByText('option two')).toBeInTheDocument();
    });

    it('renders a link and description when the card type is externalLink', () => {
      const { getByText, getByRole } = customRender([
        {
          id: 'mockId',
          type: 'externalLink',
          data: {
            url: 'https://www.soulmachines.com',
            title: 'Soul Machines',
            imageUrl:
              'https://www.soulmachines.com/wp-content/themes/soulmachines/images/sm-logo.png',
            description: 'placeholder text',
          },
        },
      ]);
      expect(getByText('placeholder text')).toBeInTheDocument();
      expect(getByRole('link', { name: 'View Page' }).getAttribute('href')).toEqual(
        'https://www.soulmachines.com',
      );
    });

    it('renders an image alt text when the card type is image', () => {
      const { getByAltText } = customRender([
        {
          id: 'id',
          type: 'image',
          data: {
            url: 'mock url',
            alt: 'mock alt text',
          },
        },
      ]);

      expect(getByAltText('mock alt text')).toBeInTheDocument();
    });
  });
});

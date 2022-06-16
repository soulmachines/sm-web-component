import { render } from '@testing-library/preact';
import { ContentCards } from '.';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ContentCard } from '@soulmachines/smwebsdk';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

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
  });
});

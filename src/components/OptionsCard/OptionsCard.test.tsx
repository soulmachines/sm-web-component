import { fireEvent, render } from '@testing-library/preact';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { OptionsCard } from '.';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<OptionsCard />', () => {
  const emptyCard = {
    id: 'mockId',
    type: 'options',
    data: {
      options: [],
    },
  };

  const cards = {
    id: 'mockId',
    type: 'options',
    data: {
      options: [
        {
          label: 'option one',
        },
        {
          label: 'option two',
          value: '2',
        },
      ],
    },
  };

  it('renders nothing when options are empty', () => {
    const { container } = render(<OptionsCard content={emptyCard} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders data-sm-content with the card id', () => {
    const { container } = render(<OptionsCard content={cards} />);
    expect(container.querySelector('[data-sm-content="mockId"]')).toBeInTheDocument();
  });

  it('renders a button with the label text for each option', () => {
    const { getByRole } = render(<OptionsCard content={cards} />);
    expect(getByRole('button', { name: /option one/ })).toBeInTheDocument();
    expect(getByRole('button', { name: /option two/ })).toBeInTheDocument();
  });

  it('calls sendTextMessage with the label when no value is present', async () => {
    const { getByRole } = render(<OptionsCard content={cards} />);
    const { sendTextMessage } = SoulMachinesContext.useSoulMachines();

    await fireEvent.click(getByRole('button', { name: /option one/ }));

    expect(sendTextMessage).toHaveBeenCalledWith('option one');
  });

  it('calls sendTextMessage with the value when a value is present', async () => {
    const { getByRole } = render(<OptionsCard content={cards} />);
    const { sendTextMessage } = SoulMachinesContext.useSoulMachines();

    await fireEvent.click(getByRole('button', { name: /option two/ }));

    expect(sendTextMessage).toHaveBeenCalledWith('2');
  });
});

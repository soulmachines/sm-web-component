import { fireEvent, render } from '@testing-library/preact';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { Modal } from '.';
import { widgetLayout } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<Modal />', () => {
  beforeAll(() => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      layout: widgetLayout.FULL_FRAME,
    });
  });

  it('does not call toggleLayout by default', () => {
    render(<Modal isOpen={true} />);
    expect(SoulMachinesContext.useSoulMachines().toggleLayout).not.toHaveBeenCalled();
  });

  it('calls toggleLayout when the minimize button is clicked', async () => {
    const { getByTitle } = render(<Modal isOpen={true} />);

    const button = getByTitle('Switch to float layout');
    await fireEvent.click(button);

    expect(SoulMachinesContext.useSoulMachines().toggleLayout).toHaveBeenCalledTimes(1);
  });

  it('renders a video', () => {
    const { baseElement } = render(<Modal isOpen={true} />);
    expect(baseElement.querySelectorAll('video')).toHaveLength(1);
  });
});

import { fireEvent, render } from '@testing-library/preact';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { FullFrameModal } from '.';
import { widgetLayout } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<FullFrameModal />', () => {
  beforeAll(() => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      layout: widgetLayout.FULL_FRAME,
    });
  });

  it('does not call toggleLayout by default', () => {
    render(<FullFrameModal isOpen={true} />);
    expect(SoulMachinesContext.useSoulMachines().toggleLayout).not.toHaveBeenCalled();
  });

  it('calls toggleLayout when the minimize button is clicked', async () => {
    const { getByTitle } = render(<FullFrameModal isOpen={true} />);

    const button = getByTitle('Switch to float layout');
    await fireEvent.click(button);

    expect(SoulMachinesContext.useSoulMachines().toggleLayout).toHaveBeenCalledTimes(1);
  });

  it('renders a video', () => {
    const { baseElement } = render(<FullFrameModal isOpen={true} />);
    expect(baseElement.querySelectorAll('video')).toHaveLength(1);
  });
});

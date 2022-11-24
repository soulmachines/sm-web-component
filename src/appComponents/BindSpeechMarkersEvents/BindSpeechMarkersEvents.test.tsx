import { BindSpeechMarkersEvents } from '.';
import { render } from '@testing-library/preact';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { widgetLayout } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<BindSpeechMarkersEvents />', () => {
  beforeEach(() => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
    });
  });
  it('calls setLayout with featureMarkers arguments', () => {
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).toHaveBeenCalledWith(widgetLayout.FULL_FRAME);
  });
});

import { BindSpeechMarkersEvents } from '.';
import { render } from '@testing-library/preact';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { widgetLayout } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<BindSpeechMarkersEvents />', () => {
  it('does not call setLayout if featureMarkers has less than 2 arguments', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      featureMarkers: ['layout'],
    });
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).not.toHaveBeenCalled();
  });

  it('does not call setLayout if featureMarkers first argument is not "layout"', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      featureMarkers: ['random', 'random'],
    });
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).not.toHaveBeenCalled();
  });

  it('calls setLayout with widgetLayout.FULL_FRAME if featureMarkers is ["layout", "fullframe"]', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      featureMarkers: ['layout', 'fullframe'],
    });
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).toHaveBeenCalledWith(widgetLayout.FULL_FRAME);
  });

  it('calls setLayout with widgetLayout.FLOAT if featureMarkers is ["layout", "float"]', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      featureMarkers: ['layout', 'float'],
    });
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).toHaveBeenCalledWith(widgetLayout.FLOAT);
  });

  it('calls setLayout with widgetLayout.FLOAT if featureMarkers is ["layout", "random string"]', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      featureMarkers: ['layout', 'x'],
    });
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).toHaveBeenCalledWith(widgetLayout.FLOAT);
  });
});

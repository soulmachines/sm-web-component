import { BindSpeechMarkersEvents } from '.';
import { render } from '@testing-library/preact';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { speechMarkers, widgetLayout } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<BindSpeechMarkersEvents />', () => {
  it('does not call setLayout if featureMarkers has no command or value', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      featureMarkers: { command: speechMarkers.LAYOUT },
    });
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).not.toHaveBeenCalled();
  });

  it('logs a warning if featureMarkers has unknown command', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      featureMarkers: { command: speechMarkers.LAYOUT, value: 'x' },
    });
    jest.spyOn(console, 'warn').mockImplementation();
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).not.toHaveBeenCalled();
    expect(console.warn).toBeCalledWith(
      `Speech Marker received with unknown command "layout", "x". Please check your spelling`,
    );
  });

  it('calls setLayout with widgetLayout.FULL_FRAME if featureMarkers is ["layout", "fullframe"]', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      featureMarkers: { command: speechMarkers.LAYOUT, value: widgetLayout.FULL_FRAME },
    });
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).toHaveBeenCalledWith(widgetLayout.FULL_FRAME);
  });

  it('calls setLayout with widgetLayout.FLOAT if featureMarkers is ["layout", "float"]', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      featureMarkers: { command: speechMarkers.LAYOUT, value: widgetLayout.FLOAT },
    });
    const { setLayout } = SoulMachinesContext.useSoulMachines();
    render(<BindSpeechMarkersEvents />);
    expect(setLayout).toHaveBeenCalledWith(widgetLayout.FLOAT);
  });
});

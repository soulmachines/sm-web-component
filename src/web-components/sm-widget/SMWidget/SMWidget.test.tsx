import { render } from '@testing-library/preact';
import { SMWidget } from '.';
import * as SoulMachinesContext from '../../../contexts/SoulMachinesContext/SoulMachinesContext';
import { ConnectionStatus } from '../../../enums';
import { SMWidgetElement } from './SMWidget';

jest.mock('../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<SMWidget />', () => {
  const mockParent: SMWidgetElement = document.createElement('div');
  const customRender = () =>
    render(<SMWidget apiKey="123" connecting-indicator={<p>Loading...</p>} parent={mockParent} />);

  it('attaches a sm-widget class to the parent element', () => {
    customRender();
    expect(mockParent.classList.contains('sm-widget')).toEqual(true);
  });

  describe(`when it is initialized`, () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
      });
    });

    it('dispatches a `ready` event from the element', () => {
      const mockCallback = jest.fn();
      mockParent.addEventListener('ready', mockCallback);

      customRender();

      expect(mockCallback).toHaveBeenCalledTimes(1);
      mockParent.removeEventListener('ready', mockCallback);
    });

    it('dispatches `ready` event after all properties are ready', () => {
      const callback = () => {
        mockParent.removeEventListener('ready', callback);

        expect(mockParent.scene).toBeDefined();
        expect(mockParent.persona).toBeDefined();
      };

      mockParent.addEventListener('ready', callback);

      customRender();
    });
  });
  it('renders a loading indicator when connecting', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.CONNECTING,
    });

    const { queryByRole } = customRender();
    expect(queryByRole('progressbar')).toBeInTheDocument();
  });

  it('renders a video when connected', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.CONNECTED,
    });

    const { container } = customRender();
    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('renders a greeting when it is disconnected', () => {
    jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
      ...SoulMachinesContext.useSoulMachines(),
      connectionStatus: ConnectionStatus.DISCONNECTED,
    });

    const { getByText } = customRender();
    expect(getByText("Got any questions? I'm happy to help.")).toBeInTheDocument();
  });
});

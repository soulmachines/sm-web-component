import { fireEvent, render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import { Widget } from '.';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { ConnectionStatus, SessionDataKeys, widgetLayout, widgetPosition } from '../../enums';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<Widget />', () => {
  const scrollSpy = jest.fn();
  const defaultGreeting = "Got any questions? I'm happy to help.";
  const timeoutMessage = /Your session has ended/;
  const unableToConnectMessage = /Unable to connect/;
  const customRender = ({ position }: { position?: widgetPosition } = {}) =>
    render(<Widget position={position} />);

  beforeEach(() => {
    window.HTMLElement.prototype.scroll = scrollSpy;
  });

  it('should not have any accessibility violations', async () => {
    const { container } = customRender();
    expect(await axe(container)).toHaveNoViolations();
  });

  it('does not call scroll on a html element', () => {
    customRender();
    expect(scrollSpy).not.toHaveBeenCalled();
  });

  describe('positioning', () => {
    describe('rendering in the bottom right corner', () => {
      it('renders a sm-items-end class', () => {
        const { container } = customRender();
        expect(container.querySelector('.sm-items-end')).toBeInTheDocument();
      });

      it('does not render a sm-items-start class', () => {
        const { container } = customRender();
        expect(container.querySelector('.sm-items-start')).not.toBeInTheDocument();
      });

      it('does not render a sm-flex-row-reverse class', () => {
        const { container } = customRender();
        expect(container.querySelector('.sm-flex-row-reverse')).not.toBeInTheDocument();
      });
    });

    describe('rendering in the bottom left corner', () => {
      it('renders a sm-items-start class', () => {
        const { container } = customRender({ position: widgetPosition.BOTTOM_LEFT });
        expect(container.querySelector('.sm-items-start')).toBeInTheDocument();
      });

      it('does renders a sm-flex-row-reverse class', () => {
        const { container } = customRender({ position: widgetPosition.BOTTOM_LEFT });
        expect(container.querySelector('.sm-flex-row-reverse')).toBeInTheDocument();
      });

      it('does not render a sm-items-end class', () => {
        const { container } = customRender({ position: widgetPosition.BOTTOM_LEFT });
        expect(container.querySelector('.sm-items-end')).not.toBeInTheDocument();
      });
    });
  });

  // describe('When connecting for the first time', () => {
  //   it('does not connect automatically', () => {
  //     expect(SoulMachinesContext.useSoulMachines().connect).toBeCalledTimes(0);
  //   });

  //   it('calls connect when the button is clicked', async () => {
  //     const { getByTitle } = customRender();
  //     const button = getByTitle('Digital person');

  //     await fireEvent.click(button);

  //     expect(SoulMachinesContext.useSoulMachines().connect).toBeCalledTimes(1);
  //   });
  // });

  // describe('When resuming a session by using the sm-session-id in session storage', () => {
  //   it('calls connect automatically', () => {
  //     sessionStorage.setItem(SessionDataKeys.sessionId, 'xxx-xxx-xxx');
  //     customRender();
  //     expect(SoulMachinesContext.useSoulMachines().connect).toBeCalledTimes(1);
  //   });
  // });

  // describe('when the scene is disconnected', () => {
  //   beforeEach(() => {
  //     jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
  //       ...SoulMachinesContext.useSoulMachines(),
  //       connectionStatus: ConnectionStatus.DISCONNECTED,
  //     });
  //   });

  //   it('renders a default greeting', () => {
  //     const { queryByText } = customRender();
  //     expect(queryByText(defaultGreeting)).toBeInTheDocument();
  //   });

  //   it('renders a svg of a digital person', () => {
  //     const { getByTitle } = customRender();
  //     expect(getByTitle('Digital person')).toBeInTheDocument();
  //   });

  //   it('does not render a video', () => {
  //     const { container } = customRender();
  //     expect(container.querySelector('video')).not.toBeInTheDocument();
  //   });

  //   it('does not render a loading indicator', () => {
  //     const { queryByRole } = customRender();
  //     expect(queryByRole('progressbar')).not.toBeInTheDocument();
  //   });

  //   it('does not render a disconnect button', () => {
  //     const { queryByTitle } = customRender();
  //     expect(queryByTitle('Close video')).not.toBeInTheDocument();
  //   });

  //   describe('when a custom profile image is provided', () => {
  //     it('renders the image', () => {
  //       const src = 'My mock profile url';
  //       const { getByText } = render(<Widget profilePicture={src} />);
  //       expect(getByText('Digital person')).toBeInTheDocument();
  //     });

  //     it('does not render a default svg image', () => {
  //       const { getByTitle } = customRender();
  //       expect(getByTitle('Digital person')).toBeInTheDocument();
  //     });
  //   });
  // });

  describe('when the scene is connecting', () => {
    beforeEach(() => {
      jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
        ...SoulMachinesContext.useSoulMachines(),
        connectionStatus: ConnectionStatus.CONNECTING,
      });
    });

    // it('renders a loading indicator', () => {
    //   const { queryByRole } = customRender();
    //   expect(queryByRole('progressbar')).toBeInTheDocument();
    // });

    it('does not render a disconnect button', () => {
      const { queryByTitle } = customRender();
      expect(queryByTitle('Close video')).not.toBeInTheDocument();
    });

    it('does not render a video', () => {
      const { container } = customRender();
      expect(container.querySelector('video')).not.toBeInTheDocument();
    });

    it('does not render the default greeting', () => {
      const { queryByText } = customRender();
      expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
    });

    it('does not render a timeout message', () => {
      const { queryByText } = customRender();
      expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
    });

    it('does not render a "unable to connect" message', () => {
      const { queryByText } = customRender();
      expect(queryByText(unableToConnectMessage)).not.toBeInTheDocument();
    });
  });

  describe('when the scene is connected', () => {
    describe('when layout is FLOAT', () => {
      beforeEach(() => {
        jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: ConnectionStatus.CONNECTED,
          layout: widgetLayout.FLOAT,
        });
      });

      it('renders a video', () => {
        const { container } = customRender();
        expect(container.querySelectorAll('video')).toHaveLength(1);
      });

      it('renders a disconnect button', () => {
        const { queryByTitle } = customRender();
        expect(queryByTitle('Close video')).toBeInTheDocument();
      });

      it('does not render a loading indicator', () => {
        const { queryByRole } = customRender();
        expect(queryByRole('progressbar')).not.toBeInTheDocument();
      });

      it('does not render the default greeting', () => {
        const { queryByText } = customRender();
        expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
      });

      it('does not render a timeout message', () => {
        const { queryByText } = customRender();
        expect(queryByText(timeoutMessage)).not.toBeInTheDocument();
      });
    });

    describe('when layout is FULLFRAME', () => {
      beforeEach(() => {
        jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: ConnectionStatus.CONNECTED,
          layout: widgetLayout.FULL_FRAME,
        });
      });

      it('renders a video', () => {
        const { baseElement } = customRender();
        expect(baseElement.querySelectorAll('video')).toHaveLength(1);
      });

      it('calls scroll on the html element with top 0', () => {
        customRender();
        expect(scrollSpy).toHaveBeenCalledWith({ top: 0 });
      });

      it('calls scroll on the html element each time the content cards change', () => {
        const { rerender } = customRender();

        expect(scrollSpy).toHaveBeenCalledTimes(1);

        // Rerender with same card data
        rerender(<Widget position={widgetPosition.BOTTOM_RIGHT} />);
        expect(scrollSpy).toHaveBeenCalledTimes(1);

        // Rerender with different card data
        jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: ConnectionStatus.CONNECTED,
          layout: widgetLayout.FULL_FRAME,
          cards: [],
        });

        rerender(<Widget position={widgetPosition.BOTTOM_RIGHT} />);
        expect(scrollSpy).toHaveBeenCalledTimes(2);
      });
    });
  });
});

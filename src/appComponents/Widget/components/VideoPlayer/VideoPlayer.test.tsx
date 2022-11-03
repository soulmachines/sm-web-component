import { render } from '@testing-library/preact';
import { ConnectionStatus, widgetPosition } from '../../../../enums';
import { VideoPlayer, VideoPlayerProps } from './VideoPlayer';
import * as SoulMachinesContext from '../../../../contexts/SoulMachinesContext';

jest.mock('../../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<VideoPlayer />', () => {
  const defaultProps = {
    renderInFullFrame: false,
    floatingPosition: widgetPosition.BOTTOM_LEFT,
  };
  const customRender = (props: VideoPlayerProps) => render(<VideoPlayer {...props} />);

  describe('when in fullframe layout', () => {
    it('renders a single video', () => {
      const { container } = customRender({ ...defaultProps, renderInFullFrame: true });
      expect(container.querySelectorAll('video')).toHaveLength(1);
    });
  });

  describe('when not in fullframe layout', () => {
    describe('when position is bottom right', () => {
      it('renders a sm-origin-bottom-right class', () => {
        const { container } = customRender({
          renderInFullFrame: true,
          floatingPosition: widgetPosition.BOTTOM_RIGHT,
        });
        expect(container.querySelector('.sm-origin-bottom-right')).toBeInTheDocument();
      });

      it('does not render a sm-origin-bottom-left class', () => {
        const { container } = customRender({
          renderInFullFrame: true,
          floatingPosition: widgetPosition.BOTTOM_RIGHT,
        });
        expect(container.querySelector('.sm-origin-bottom-left')).not.toBeInTheDocument();
      });
    });

    describe('when position is bottom left', () => {
      it('renders a sm-origin-bottom-left class', () => {
        const { container } = customRender({
          renderInFullFrame: true,
          floatingPosition: widgetPosition.BOTTOM_LEFT,
        });
        expect(container.querySelector('.sm-origin-bottom-left')).toBeInTheDocument();
      });

      it('does not render a sm-origin-bottom-right class', () => {
        const { container } = customRender({
          renderInFullFrame: true,
          floatingPosition: widgetPosition.BOTTOM_LEFT,
        });
        expect(container.querySelector('.sm-origin-bottom-right')).not.toBeInTheDocument();
      });
    });

    describe('when connected', () => {
      beforeEach(() => {
        jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: ConnectionStatus.CONNECTED,
        });
      });

      it('renders a single video', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelectorAll('video')).toHaveLength(1);
      });

      it('does not render a class to hide the video', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelector('.sm-hidden')).not.toBeInTheDocument();
      });

      it('renders video controls', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelector('button')).toBeInTheDocument();
      });

      it('does not render a hidden attribute', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelector('[hidden=""]')).not.toBeInTheDocument();
      });

      it('renders a aria-hidden false attribute', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelector('[aria-hidden="false"]')).toBeInTheDocument();
      });
    });

    describe('when not connected', () => {
      beforeEach(() => {
        jest.spyOn(SoulMachinesContext, 'useSoulMachines').mockReturnValue({
          ...SoulMachinesContext.useSoulMachines(),
          connectionStatus: ConnectionStatus.DISCONNECTED,
        });
      });

      it('renders a single video', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelectorAll('video')).toHaveLength(1);
      });

      it('renders a class to hide the video', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelector('.sm-hidden')).toBeInTheDocument();
      });

      it('renders no video controls', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelectorAll('button')).toHaveLength(0);
      });

      it('renders a hidden attribute', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelector('[hidden=""]')).toBeInTheDocument();
      });

      it('renders a aria-hidden true attribute', () => {
        const { container } = customRender({ ...defaultProps, renderInFullFrame: false });
        expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
      });
    });
  });
});

import { render } from '@testing-library/preact';
import { widgetPosition } from '../../../../enums';
import { FullFrameVideo } from './FullFrameVideo';

jest.mock('../../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<FullFrameVideo />', () => {
  describe('when transitionIn is false', () => {
    it('does not render a video element', () => {
      const { container } = render(
        <FullFrameVideo floatingPosition={widgetPosition.BOTTOM_LEFT} transitionIn={false} />,
      );

      expect(container.querySelector('video')).not.toBeInTheDocument();
    });
  });

  describe('when transitionIn is true', () => {
    it('renders a video element', () => {
      const { container } = render(
        <FullFrameVideo floatingPosition={widgetPosition.BOTTOM_LEFT} transitionIn={true} />,
      );

      expect(container.querySelector('video')).toBeInTheDocument();
    });
  });

  describe('when floating position is bottom left', () => {
    it('renders a sm-origin-bottom-left class', () => {
      const { container } = render(
        <FullFrameVideo floatingPosition={widgetPosition.BOTTOM_LEFT} transitionIn={true} />,
      );

      expect(container.querySelector('.sm-origin-bottom-left')).toBeInTheDocument();
    });

    it('does not render a sm-origin-bottom-right class', () => {
      const { container } = render(
        <FullFrameVideo floatingPosition={widgetPosition.BOTTOM_LEFT} transitionIn={true} />,
      );

      expect(container.querySelector('.sm-origin-bottom-right')).not.toBeInTheDocument();
    });
  });

  describe('when floating position is bottom right', () => {
    it('renders a sm-origin-bottom-right class', () => {
      const { container } = render(
        <FullFrameVideo floatingPosition={widgetPosition.BOTTOM_RIGHT} transitionIn={true} />,
      );

      expect(container.querySelector('.sm-origin-bottom-right')).toBeInTheDocument();
    });

    it('does not render a sm-origin-bottom-left class', () => {
      const { container } = render(
        <FullFrameVideo floatingPosition={widgetPosition.BOTTOM_RIGHT} transitionIn={true} />,
      );

      expect(container.querySelector('.sm-origin-bottom-left')).not.toBeInTheDocument();
    });
  });
});

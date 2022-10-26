import { render } from '@testing-library/preact';
import { widgetPosition } from '../../../../enums';
import { ProgressIndicatorWrapper } from './ProgressIndicatorWrapper';

jest.mock('../../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<ProgressIndicatorWrapper />', () => {
  const customRender = (
    position: widgetPosition = widgetPosition.BOTTOM_LEFT,
    transitionIn = true,
  ) =>
    render(
      <ProgressIndicatorWrapper position={position} transitionIn={transitionIn}>
        <p>Mock content</p>
      </ProgressIndicatorWrapper>,
    );

  describe('when position is bottom left', () => {
    it('renders a sm-origin-bottom-left class', () => {
      const { container } = customRender();
      expect(container.querySelector('.sm-origin-bottom-left')).toBeInTheDocument();
    });

    it('does not render a sm-origin-bottom-right class', () => {
      const { container } = customRender();
      expect(container.querySelector('.sm-origin-bottom-right')).not.toBeInTheDocument();
    });
  });

  describe('when position is bottom right', () => {
    it('renders a sm-origin-bottom-right class', () => {
      const { container } = customRender(widgetPosition.BOTTOM_RIGHT);
      expect(container.querySelector('.sm-origin-bottom-right')).toBeInTheDocument();
    });

    it('does not render a sm-origin-bottom-left class', () => {
      const { container } = customRender(widgetPosition.BOTTOM_RIGHT);
      expect(container.querySelector('.sm-origin-bottom-left')).not.toBeInTheDocument();
    });
  });

  describe('when transitionIn is false', () => {
    it('renders nothing', () => {
      const { container } = customRender(widgetPosition.BOTTOM_RIGHT, false);
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when transitionIn is true', () => {
    it('renders the child content', () => {
      const { queryByText } = render(
        <ProgressIndicatorWrapper position={widgetPosition.BOTTOM_LEFT} transitionIn={true}>
          <p>Mock content</p>
        </ProgressIndicatorWrapper>,
      );

      expect(queryByText('Mock content')).toBeInTheDocument();
    });
  });
});

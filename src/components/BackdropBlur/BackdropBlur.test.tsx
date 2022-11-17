import { BackdropBlur } from '.';
import { fireEvent, render } from '@testing-library/preact';
import '@testing-library/jest-dom/extend-expect';
import { imageCardContent } from '../../storybook-content';
import { ImageCard } from '../../contentCards/ImageCard';

const ref = { current: null };
const scrollableContainerId = 'scrollEl';

function renderBackdropBlur(scrollOffset = 100) {
  const { getByTestId, container } = render(
    <div ref={ref} data-testid={scrollableContainerId}>
      <BackdropBlur scrollTargetRef={ref} scrollOffset={scrollOffset}>
        <ImageCard content={imageCardContent} />
      </BackdropBlur>
    </div>,
  );
  return { getByTestId, container };
}
const minimumScrollToRenderBlur = 100;

describe('<BackdropBlur />', () => {
  it('adds the blur class when scroll amount is greater than the scrollOffset', () => {
    const { getByTestId, container } = renderBackdropBlur(minimumScrollToRenderBlur);
    const scrollableContainer = getByTestId(scrollableContainerId);
    jest
      .spyOn(scrollableContainer, 'scrollTop', 'get')
      .mockReturnValue(minimumScrollToRenderBlur + 1);
    fireEvent.scroll(scrollableContainer);
    expect(container.querySelectorAll('.sm-backdrop-blur-lg')).toHaveLength(1);
  });

  it('does not add the blur class when scroll amount is less than the scrollOffset', () => {
    const { getByTestId, container } = renderBackdropBlur(minimumScrollToRenderBlur);
    const scrollableContainer = getByTestId(scrollableContainerId);
    jest
      .spyOn(scrollableContainer, 'scrollTop', 'get')
      .mockReturnValue(minimumScrollToRenderBlur - 1);
    fireEvent.scroll(scrollableContainer);
    expect(container.querySelectorAll('.sm-backdrop-blur-lg')).toHaveLength(0);
  });

  it('adds the blur class when scroll amount is equal to the scrollOffset', () => {
    const { getByTestId, container } = renderBackdropBlur(minimumScrollToRenderBlur);
    const scrollableContainer = getByTestId(scrollableContainerId);
    jest.spyOn(scrollableContainer, 'scrollTop', 'get').mockReturnValue(minimumScrollToRenderBlur);
    fireEvent.scroll(scrollableContainer);
    expect(container.querySelectorAll('.sm-backdrop-blur-lg')).toHaveLength(1);
  });
});

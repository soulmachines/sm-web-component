import { BackdropBlur, BackdropBlurProps } from '.';
import { fireEvent, render, cleanup } from '@testing-library/preact';
import '@testing-library/jest-dom/extend-expect';
import { imageCardContent } from '../../storybook-content';
import { ImageCard } from '../../contentCards/ImageCard';

const ref = { current: null };
const scrollElTestId = 'scrollEl';

function renderBackdropBlur(scrollOffset = 100) {
  const { getByTestId, container } = render(
    <div ref={ref} data-testid={scrollElTestId}>
      <BackdropBlur scrollTargetRef={ref} scrollOffset={scrollOffset}>
        <ImageCard content={imageCardContent} />
      </BackdropBlur>
    </div>,
  );
  return { getByTestId, container };
}
const minimumScrollToRenderBlur = 100;

describe('<BackdropBlur />', () => {
  it('Content wrapped by BackdropBlur blurs on scroll greater than minimum Scroll', () => {
    const { getByTestId, container } = renderBackdropBlur(minimumScrollToRenderBlur);
    const backgroundblur = getByTestId(scrollElTestId);
    jest.spyOn(backgroundblur, 'scrollTop', 'get').mockReturnValue(minimumScrollToRenderBlur + 1);
    fireEvent.scroll(backgroundblur);
    expect(container.querySelectorAll('.sm-backdrop-blur-lg')).toHaveLength(1);
  });

  it('Content wrapped by BackdropBlur does not blur on scroll less than minimum Scroll', () => {
    const { getByTestId, container } = renderBackdropBlur(minimumScrollToRenderBlur);
    const backgroundblur = getByTestId(scrollElTestId);
    jest.spyOn(backgroundblur, 'scrollTop', 'get').mockReturnValue(minimumScrollToRenderBlur - 1);
    fireEvent.scroll(backgroundblur);
    expect(container.querySelectorAll('.sm-backdrop-blur-lg')).toHaveLength(0);
  });

  it('Content wrapped by BackdropBlur blurs on scroll equal to minimum Scroll', () => {
    const { getByTestId, container } = renderBackdropBlur(minimumScrollToRenderBlur);
    const backgroundblur = getByTestId(scrollElTestId);
    jest.spyOn(backgroundblur, 'scrollTop', 'get').mockReturnValue(minimumScrollToRenderBlur);
    fireEvent.scroll(backgroundblur);
    expect(container.querySelectorAll('.sm-backdrop-blur-lg')).toHaveLength(1);
  });
});

import { BackdropBlur } from '.';
import { fireEvent, render } from '@testing-library/preact';
import '@testing-library/jest-dom/extend-expect';

const ref = { current: document.createElement('div') };
const scrollableContainerId = 'scrollEl';

function customRender(scrollOffset = 100, mobileOnly = false) {
  return render(
    <div ref={ref} data-testid={scrollableContainerId}>
      <BackdropBlur scrollTargetRef={ref} scrollOffset={scrollOffset} smallScreenOnly={mobileOnly}>
        <p>Mock content</p>
      </BackdropBlur>
    </div>,
  );
}

function triggerScroll(element: HTMLElement, offset: number) {
  jest.spyOn(element, 'scrollTop', 'get').mockReturnValue(offset);
  fireEvent.scroll(element);
}

const minimumScrollToRenderBlur = 100;

describe('<BackdropBlur />', () => {
  it('adds the blur class when scroll amount is greater than the scrollOffset', () => {
    const { getByTestId, container } = customRender(minimumScrollToRenderBlur);
    const scrollableContainer = getByTestId(scrollableContainerId);
    triggerScroll(scrollableContainer, minimumScrollToRenderBlur + 1);
    expect(container.querySelectorAll('.sm-backdrop-blur-md')).toHaveLength(1);
  });

  it('does not add the blur class when scroll amount is less than the scrollOffset', () => {
    const { getByTestId, container } = customRender(minimumScrollToRenderBlur);
    const scrollableContainer = getByTestId(scrollableContainerId);
    triggerScroll(scrollableContainer, minimumScrollToRenderBlur - 1);
    expect(container.querySelectorAll('.sm-backdrop-blur-md')).toHaveLength(0);
  });

  it('adds the blur class when scroll amount is equal to the scrollOffset', () => {
    const { getByTestId, container } = customRender(minimumScrollToRenderBlur);
    const scrollableContainer = getByTestId(scrollableContainerId);
    triggerScroll(scrollableContainer, minimumScrollToRenderBlur);
    expect(container.querySelectorAll('.sm-backdrop-blur-md')).toHaveLength(1);
  });

  it('does not add blur none for screens larger than small when smallScreenOnly is false', () => {
    const { getByTestId, container } = customRender(minimumScrollToRenderBlur, false);
    const scrollableContainer = getByTestId(scrollableContainerId);
    triggerScroll(scrollableContainer, minimumScrollToRenderBlur);
    // Can't query these tailwind classes md: due to syntax error
    // Using classlist as a work around
    const elementClasses = container.querySelector('.sm-backdrop-blur-md')?.classList;
    expect(elementClasses?.contains('md:sm-backdrop-blur-none')).toEqual(false);
  });

  it('does not add blur none for screens larger than small when smallScreenOnly is true', () => {
    const { getByTestId, container } = customRender(minimumScrollToRenderBlur, true);
    const scrollableContainer = getByTestId(scrollableContainerId);
    triggerScroll(scrollableContainer, minimumScrollToRenderBlur);
    const elementClasses = container.querySelector('.sm-backdrop-blur-md')?.classList;
    expect(elementClasses?.contains('md:sm-backdrop-blur-none')).toEqual(true);
  });

  it('removes the scroll event listener when component is unmounted', () => {
    const { unmount } = customRender(minimumScrollToRenderBlur, true);

    const removeEventListenerSpy = jest.spyOn(ref.current, 'removeEventListener');
    unmount();

    expect(removeEventListenerSpy).toBeCalledWith('scroll', expect.any(Function));
  });
});

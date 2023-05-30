import { act, renderHook } from '@testing-library/react-hooks';
import { widgetLayout } from '../../enums';
import { useToggleLayout } from './useToggleLayout';

describe('useToggleLayout', () => {
  const customRender = (initialLayout = widgetLayout.FLOAT) =>
    renderHook(() => useToggleLayout(initialLayout));

  it('returns the layout, same as initialLayout passed in', () => {
    const { result } = customRender(widgetLayout.FULL_FRAME);
    expect(result.current.layout).toEqual(widgetLayout.FULL_FRAME);
  });

  it('returns a toggleLayout function', () => {
    const { result } = customRender();
    expect(typeof result.current.toggleLayout).toEqual('function');
  });

  describe('when toggleLayout fires', () => {
    it('updates layout to FULL_FRAME if previous layout is FLOAT', async () => {
      const { result } = customRender();
      expect(result.current.layout).toEqual(widgetLayout.FLOAT);
      act(() => {
        result.current.toggleLayout();
      });
      expect(result.current.layout).toEqual(widgetLayout.FULL_FRAME);
    });

    it('updates layout to FLOAT if previous layout is FULL_FRAME', async () => {
      const { result } = customRender(widgetLayout.FULL_FRAME);
      expect(result.current.layout).toEqual(widgetLayout.FULL_FRAME);
      act(() => {
        result.current.toggleLayout();
      });
      expect(result.current.layout).toEqual(widgetLayout.FLOAT);
    });
  });
});

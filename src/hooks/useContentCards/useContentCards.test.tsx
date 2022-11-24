import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/preact';
import { useContentCards } from './useContentCards';

jest.mock('@soulmachines/smwebsdk');

describe('useContentCards', () => {
  const mockScene = new Scene();
  const customRender = () => renderHook(() => useContentCards(mockScene));

  it('returns an empty array by default', () => {
    const { result } = customRender();
    expect(result.current.cards).toEqual([]);
  });

  it('updates the cards when onCardChanged is called', () => {
    const { result, rerender } = customRender();
    const contentCardsData = [
      {
        id: 'id',
        data: {},
      },
    ];
    mockScene.conversation.onCardChanged.call(contentCardsData);

    rerender();

    expect(result.current.cards).toEqual(contentCardsData);
  });

  it('removes the event listener when component is unmounted', () => {
    const { unmount } = customRender();

    unmount();

    expect(mockScene.conversation.onCardChanged.removeListener).toBeCalledWith(
      expect.any(Function),
    );
  });
});

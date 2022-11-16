import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/preact';
import { useCards } from './useCards';

describe('useCards', () => {
  const mockScene = new Scene();
  const customRender = () => renderHook(() => useCards(mockScene));

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
});

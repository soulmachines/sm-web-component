import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/preact';
import { useCards } from './useCards';

describe('useCards', () => {
  const mockScene = new Scene();
  const customRender = () => renderHook(() => useCards(mockScene));

  it('set cards with activeCards', () => {
    const { result } = customRender();
    const contentCardsData = [
      {
        id: 'id',
        data: {},
      },
    ];
    mockScene.conversation.onCardChanged.call(contentCardsData);

    expect(result.current.cards).toContainEqual(contentCardsData);
  });
});

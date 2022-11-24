import { Scene, ConversationStateTypes } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useConversationState } from '.';

describe('useConversationState()', () => {
  const scene = new Scene();

  it('returns the conversation state, defaulted to idle', () => {
    const { result } = renderHook(() => useConversationState(scene));
    expect(result.current.conversationState).toEqual(ConversationStateTypes.idle);
  });

  fit('removes the event listener when component is unmounted', () => {
    const { unmount } = renderHook(() => useConversationState(scene));

    unmount();

    expect(scene.conversation.onConversationStateUpdated.removeListener).toBeCalledWith(
      expect.any(Function),
    );
  });

  describe('when onConversationStateUpdated fires', () => {
    it('updates the state to the state received from the event', () => {
      const { result, rerender } = renderHook(() => useConversationState(scene));
      scene.conversation.onConversationStateUpdated.call(ConversationStateTypes.dpSpeaking);

      rerender();

      expect(result.current.conversationState).toEqual(ConversationStateTypes.dpSpeaking);
    });
  });
});

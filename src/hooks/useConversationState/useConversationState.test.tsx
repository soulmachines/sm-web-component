import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useConversationState } from '.';
import { ConversationStateTypes } from '../../enums';

jest.mock('@soulmachines/smwebsdk');

describe('useConversationState()', () => {
  const scene = new Scene();

  it('returns the conversation state, defaulted to idle', () => {
    const { result } = renderHook(() => useConversationState(scene));
    expect(result.current.conversationState).toEqual(ConversationStateTypes.idle);
  });

  describe('when onConversationStateUpdated fires', () => {
    it('updates the state to the state received from the event', () => {
      const { result, rerender } = renderHook(() => useConversationState(scene));
      // TODO: remove once function exists
      // @ts-ignore
      scene.conversation.onConversationStateUpdated.call(ConversationStateTypes.dpSpeaking);

      rerender();

      expect(result.current.conversationState).toEqual(ConversationStateTypes.dpSpeaking);
    });
  });
});

import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useConversationState } from '.';
import { ConversationStateTypes } from '../../enums';

jest.mock('@soulmachines/smwebsdk');

describe('useConversationState()', () => {
  const scene = new Scene();

  it('returns the conversation status, defaulted to idle', () => {
    const { result } = renderHook(() => useConversationState(scene));
    expect(result.current.conversationState).toEqual(ConversationStateTypes.idle);
  });

  describe('when onConversationStateChanged fires', () => {
    it('updates the status to the status received from the event', () => {
      const { result, rerender } = renderHook(() => useConversationState(scene));
      // TODO: remove once function exists
      // @ts-ignore
      scene.conversation.onConversationStateChanged.call(ConversationStateTypes.dpSpeaking);

      rerender();

      expect(result.current.conversationState).toEqual(ConversationStateTypes.dpSpeaking);
    });
  });
});

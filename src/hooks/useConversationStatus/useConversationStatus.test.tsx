import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useConversationStatus } from '.';
import { ConversationStatusTypes } from '../../enums';

jest.mock('@soulmachines/smwebsdk');

describe('useConversationStatus()', () => {
  const scene = new Scene();

  it('returns the conversation status, defaulted to idle', () => {
    const { result } = renderHook(() => useConversationStatus(scene));
    expect(result.current.conversationStatus).toEqual(ConversationStatusTypes.idle);
  });

  describe('when onConversationStatusChanged fires', () => {
    it('updates the status to the status received from the event', () => {
      const { result, rerender } = renderHook(() => useConversationStatus(scene));
      // TODO: remove once function exists
      // @ts-ignore
      scene.conversation.onConversationStatusChanged.call(ConversationStatusTypes.dpSpeaking);

      rerender();

      expect(result.current.conversationStatus).toEqual(ConversationStatusTypes.dpSpeaking);
    });
  });
});

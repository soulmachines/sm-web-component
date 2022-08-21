import { Scene, ConversationStateTypes } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useConversationState(scene: Scene) {
  const [conversationState, setConversationState] = useState(ConversationStateTypes.idle);

  useEffect(() => {
    scene.conversation.onConversationStateUpdated.addListener((state: ConversationStateTypes) => {
      setConversationState(state);
    });
  }, [scene]);

  return {
    conversationState,
  };
}

export { useConversationState };

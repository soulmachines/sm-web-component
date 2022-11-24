import { Scene, ConversationStateTypes } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useConversationState(scene: Scene) {
  const [conversationState, setConversationState] = useState(ConversationStateTypes.idle);

  useEffect(() => {
    const handleConversationStateUpdated = (state: ConversationStateTypes) => {
      setConversationState(state);
    };

    scene.conversation.onConversationStateUpdated.addListener(handleConversationStateUpdated);

    return () => {
      scene.conversation.onConversationStateUpdated.removeListener(handleConversationStateUpdated);
    };
  }, [scene]);

  return {
    conversationState,
  };
}

export { useConversationState };

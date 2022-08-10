import { Scene } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';
import { ConversationStateTypes } from '../../enums';

function useConversationState(scene: Scene) {
  const [conversationState, setConversationState] = useState(ConversationStateTypes.idle);

  useEffect(() => {
    // TODO: remove once function exists
    // @ts-ignore
    scene.conversation.onConversationStateUpdated.addListener((state: ConversationStateTypes) => {
      setConversationState(state);
    });
  }, [scene]);

  return {
    conversationState,
  };
}

export { useConversationState };

import { Scene } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';
import { ConversationStatusTypes } from '../../enums';

function useConversationStatus(scene: Scene) {
  const [conversationStatus, setConversationStatus] = useState(ConversationStatusTypes.idle);

  useEffect(() => {
    // TODO: remove once function exists
    // @ts-ignore
    scene.conversation.onConversationStatusChanged.addListener(
      (status: ConversationStatusTypes) => {
        setConversationStatus(status);
      },
    );
  }, [scene]);

  return {
    conversationStatus,
  };
}

export { useConversationStatus };

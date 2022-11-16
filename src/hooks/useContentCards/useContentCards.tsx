import { Scene, ContentCard } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useContentCards(scene: Scene) {
  const [cards, setCards] = useState<ContentCard[]>([]);

  useEffect(() => {
    scene.conversation.onCardChanged.addListener((activeCards: ContentCard[]) => {
      setCards(activeCards);
    });

    scene.conversation.autoClearCards = true;
  }, [scene]);

  return {
    cards,
  };
}

export { useContentCards };

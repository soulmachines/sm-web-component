import { Scene, ContentCard } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useContentCards(scene: Scene) {
  const [cards, setCards] = useState<ContentCard[]>([]);

  useEffect(() => {
    const handleCardChange = (activeCards: ContentCard[]) => {
      setCards(activeCards);
    };

    scene.conversation.onCardChanged.addListener(handleCardChange);

    scene.conversation.autoClearCards = true;

    return () => {
      scene.conversation.onCardChanged.removeListener(handleCardChange);
    };
  }, [scene]);

  return {
    cards,
  };
}

export { useContentCards };

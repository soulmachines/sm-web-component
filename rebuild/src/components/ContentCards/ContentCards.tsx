import { ContentCard } from '@soulmachines/smwebsdk';
import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { OptionsCard } from '../OptionsCard';

export function ContentCards() {
  const { scene } = useSoulMachines();
  const [cards, setCards] = useState<ContentCard[]>([]);

  // TODO: share type around
  const cardComponents: Record<string, ({ content }: { content: ContentCard }) => JSX.Element> = {
    options: OptionsCard,
  };

  scene.conversation.onCardChanged.addListener((activeCards: ContentCard[]) =>
    setCards(activeCards),
  );

  if (!cards.length) return null;

  return (
    <div>
      {
        // todo: use id instead of index when sdk is released
        cards.map((card, index) => {
          if (!card.type) return null;

          const CardComponent = cardComponents[card.type];

          if (!CardComponent) return null;

          return (
            <div key={index} class="sm-w-full">
              <CardComponent content={card} />
            </div>
          );
        })
      }
    </div>
  );
}

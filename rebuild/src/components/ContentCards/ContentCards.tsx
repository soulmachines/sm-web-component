import { ContentCard } from '@soulmachines/smwebsdk';
import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { OptionsCard } from '../OptionsCard';

export type CardComponent = {
  content: ContentCard;
};

export function ContentCards() {
  const { scene } = useSoulMachines();
  const [cards, setCards] = useState<ContentCard[]>([]);

  const cardComponents: Record<string, (props: CardComponent) => JSX.Element | null> = {
    options: OptionsCard,
  };

  scene.conversation.onCardChanged.addListener((activeCards: ContentCard[]) =>
    setCards(activeCards),
  );

  return (
    <div>
      {cards.map((card) => {
        if (!card.type) return null;

        const CardComponent = cardComponents[card.type];

        if (!CardComponent) return null;

        return (
          <div key={card.id} class="sm-w-full">
            <CardComponent content={card} />
          </div>
        );
      })}
    </div>
  );
}

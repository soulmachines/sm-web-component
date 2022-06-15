import { ContentCard } from '@soulmachines/smwebsdk';
import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { useTransition, animated, config } from 'react-spring';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { OptionsCard } from '../OptionsCard';

export type CardComponent = {
  content: ContentCard;
};

export function ContentCards() {
  const { scene } = useSoulMachines();
  const [cards, setCards] = useState<ContentCard[]>([]);
  const transitions = useTransition(cards, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: config.gentle,
  });

  const cardComponents: Record<string, (props: CardComponent) => JSX.Element | null> = {
    options: OptionsCard,
  };

  scene.conversation.onCardChanged.addListener((activeCards: ContentCard[]) =>
    setCards(activeCards),
  );

  return (
    <div>
      {transitions((style, card) => {
        const CardComponent = cardComponents[card?.type || ''];
        if (!CardComponent) return null;

        return (
          <animated.div style={style} class="sm-w-full">
            <CardComponent content={card} />
          </animated.div>
        );
      })}
    </div>
  );
}

import { ContentCard } from '@soulmachines/smwebsdk';
import { Fragment, JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useTransition, animated, config } from 'react-spring';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ImageCard } from '../ImageCard';
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
    image: ImageCard,
  };

  useEffect(() => {
    scene.conversation.onCardChanged.addListener((activeCards: ContentCard[]) =>
      setCards(activeCards),
    );

    scene.conversation.autoClearCards = true;
  }, [scene]);

  return (
    <Fragment>
      {transitions((style, card) => {
        // Get the custom content card to render
        const ContentCardComponent = cardComponents[card?.type || ''];

        // Return if one does not exist
        if (!ContentCardComponent) return null;

        // Wrap content card in react springs animation hooks
        const AnimatedContentCardComponent = animated(ContentCardComponent);

        return <AnimatedContentCardComponent style={style} content={card} />;
      })}
    </Fragment>
  );
}

import { ContentCard } from '@soulmachines/smwebsdk';
import { Fragment, JSX } from 'preact';
import { useTransition, animated, config } from 'react-spring';
import { ImageCard } from '../../contentCards/ImageCard';
import { LinkCard, LinkCardProps } from '../../contentCards/LinkCard';
import { MarkdownCard } from '../../contentCards/MarkdownCard';
import { OptionsCard } from '../../contentCards/OptionsCard';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';

export type CardComponent = {
  content: ContentCard;
};

const ExternalLinkCard = (props: LinkCardProps) => <LinkCard {...props} isExternal={true} />;
const InternalLinkCard = (props: LinkCardProps) => <LinkCard {...props} isExternal={false} />;

export function ContentCards() {
  const { cards } = useSoulMachines();
  const transitions = useTransition(cards, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: config.gentle,
  });

  const cardComponents: Record<string, (props: CardComponent) => JSX.Element | null> = {
    options: OptionsCard,
    image: ImageCard,
    externalLink: ExternalLinkCard,
    internalLink: InternalLinkCard,
    markdown: MarkdownCard,
  };

  return (
    <Fragment>
      {transitions((style, card) => {
        // Get the custom content card to render
        const ContentCardComponent = cardComponents[card?.type || ''];

        // Return if one does not exist
        if (!ContentCardComponent) return null;

        // Wrap content card in react springs animation hooks
        const AnimatedContentCardComponent = animated(ContentCardComponent);

        return (
          <div class="sm-w-79 md:sm-w-104 sm-max-h-full sm-flex sm-flex-col sm-justify-end sm-gap-y-2 sm-overflow-hidden sm-p-8 -sm-m-8 md:sm-gap-y-3">
            <AnimatedContentCardComponent style={style} content={card} />
          </div>
        );
      })}
    </Fragment>
  );
}

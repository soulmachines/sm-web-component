import { ContentCard as SMContentCard } from '@soulmachines/smwebsdk';
import { Fragment, JSX } from 'preact';
import { useTransition, config } from 'react-spring';
import { ImageCardContent } from '../../contentCards/ImageCardContent';
import { LinkCardContent, LinkCardContentProps } from '../../contentCards/LinkCardContent';
import { MarkdownCardContent } from '../../contentCards/MarkdownCardContent';
import { OptionsCardContent } from '../../contentCards/OptionsCardContent';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ContentCard } from '../ContentCard/ContentCard';

export type ContentCardsProps = {
  fullHeight: boolean;
};

export type CardComponent = {
  content: SMContentCard;
};

const ExternalLinkCardContent = (props: LinkCardContentProps) => (
  <LinkCardContent {...props} isExternal={true} />
);
const InternalLinkCardContent = (props: LinkCardContentProps) => (
  <LinkCardContent {...props} isExternal={false} />
);

export function ContentCards({ fullHeight }: ContentCardsProps) {
  const { cards } = useSoulMachines();
  const transitions = useTransition(cards, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: config.gentle,
  });
  const flushCards = ['image'];

  const cardComponents: Record<string, (props: CardComponent) => JSX.Element | null> = {
    options: OptionsCardContent,
    image: ImageCardContent,
    externalLink: ExternalLinkCardContent,
    internalLink: InternalLinkCardContent,
    markdown: MarkdownCardContent,
  };

  return (
    <Fragment>
      {transitions((style, card) => {
        // Get the custom content card to render
        const CardContentComponent = cardComponents[card?.type || ''];

        // Return if one does not exist
        if (!CardContentComponent) return null;

        return (
          <div class="sm-w-79 md:sm-w-104 sm-max-h-full sm-flex sm-flex-col sm-justify-end sm-gap-y-2 sm-overflow-hidden sm-p-8 -sm-m-8 md:sm-gap-y-3">
            <ContentCard
              contentId={card.id}
              fullHeight={fullHeight}
              springStyle={style}
              flush={flushCards.includes(card?.type || '')}
            >
              <CardContentComponent content={card} />
            </ContentCard>
          </div>
        );
      })}
    </Fragment>
  );
}

import { LinkCard, LinkCardProps } from '.';
import { ContentCard } from '../../appComponents/ContentCard';
import { linkCardContent } from '../../storybook-content';

export default {
  title: `Content Cards / LinkCard`,
  component: LinkCard,
  argTypes: {
    content: { control: 'object', defaultValue: linkCardContent },
    isExternal: { control: 'boolean', defaultValue: true },
    fullHeight: { control: 'boolean', defaultValue: false },
  },
};

export const Basic = ({
  content,
  isExternal,
  fullHeight,
}: LinkCardProps & { fullHeight: boolean }) => (
  <ContentCard contentId="mockId" fullHeight={fullHeight}>
    <LinkCard content={content} isExternal={isExternal} />
  </ContentCard>
);

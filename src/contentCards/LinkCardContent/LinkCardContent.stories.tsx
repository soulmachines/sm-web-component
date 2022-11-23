import { LinkCardContent, LinkCardContentProps } from '.';
import { ContentCard } from '../../appComponents/ContentCard';
import { linkCardContent } from '../../storybook-content';

export default {
  title: `Content Cards / LinkCardContent`,
  component: LinkCardContent,
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
}: LinkCardContentProps & { fullHeight: boolean }) => (
  <ContentCard contentId="mockId" fullHeight={fullHeight}>
    <LinkCardContent content={content} isExternal={isExternal} />
  </ContentCard>
);

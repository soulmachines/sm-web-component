import { LinkCardContent, LinkCardContentProps } from '.';
import { ContentCard } from '../../appComponents/ContentCard';
import { linkCardContent } from '../../storybook-content';

export default {
  title: 'Content Cards / LinkCardContent',
  component: LinkCardContent,
  argTypes: {
    content: { control: 'object' },
    isExternal: { control: 'boolean' },
    fullHeight: { control: 'boolean' },
  },
  args: {
    content: linkCardContent,
    isExternal: true,
    fullHeight: false,
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

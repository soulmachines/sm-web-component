import { MarkdownCard, MarkdownCardProps } from '.';
import { ContentCard } from '../../appComponents/ContentCard';
import { markdownCardContent } from '../../storybook-content';

export default {
  title: `Content Cards / MarkdownCard`,
  component: MarkdownCard,
  argTypes: {
    content: { control: 'object', defaultValue: markdownCardContent },
    fullHeight: { control: 'boolean', defaultValue: false },
  },
  parameters: {
    docs: {
      page: <MarkdownCard content={markdownCardContent} />,
    },
  },
};

export const Basic = ({ content, fullHeight }: MarkdownCardProps & { fullHeight: boolean }) => (
  <ContentCard contentId="mockId" fullHeight={fullHeight}>
    <MarkdownCard content={content} />
  </ContentCard>
);

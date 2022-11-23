import { MarkdownCardContent, MarkdownCardContentProps } from '.';
import { ContentCard } from '../../appComponents/ContentCard';
import { markdownCardContent } from '../../storybook-content';

export default {
  title: `Content Cards / MarkdownCardContent`,
  component: MarkdownCardContent,
  argTypes: {
    content: { control: 'object', defaultValue: markdownCardContent },
    fullHeight: { control: 'boolean', defaultValue: false },
  },
  parameters: {
    docs: {
      page: <MarkdownCardContent content={markdownCardContent} />,
    },
  },
};

export const Basic = ({
  content,
  fullHeight,
}: MarkdownCardContentProps & { fullHeight: boolean }) => (
  <ContentCard contentId="mockId" fullHeight={fullHeight}>
    <MarkdownCardContent content={content} />
  </ContentCard>
);

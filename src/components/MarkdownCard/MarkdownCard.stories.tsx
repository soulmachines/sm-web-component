import { MarkdownCard, MarkdownCardProps } from '.';
import { markdownCardContent } from '../../storybook-content';

export default {
  title: `Components / MarkdownCard`,
  component: MarkdownCard,
  argTypes: {
    content: { control: 'object', defaultValue: markdownCardContent },
  },
  parameters: {
    docs: {
      page: <MarkdownCard content={markdownCardContent} />,
    },
  },
};

export const Basic = ({ content }: MarkdownCardProps) => <MarkdownCard content={content} />;

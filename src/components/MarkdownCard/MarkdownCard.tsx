import { ContentCard } from '@soulmachines/smwebsdk';
import { Card } from '../Card';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownCardProps = {
  content: ContentCard;
  //  Styles are passed through from react spring
  style?: Record<string, 'string | CSSProperties | undefined'>;
};

type MarkdownData = {
  text: string;
};

export function MarkdownCard({ content, style }: MarkdownCardProps) {
  const data = content.data as unknown as MarkdownData;
  console.log(data.text);
  if (!data.text) {
    return null;
  }

  return (
    <Card style={style}>
      <div
        data-sm-content={content.id}
        className="sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.text}</ReactMarkdown>
      </div>
    </Card>
  );
}

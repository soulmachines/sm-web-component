import { Button } from '../Button';
import { Card } from '../Card';
import { Text } from '../Text';
import { ContentCard } from '@soulmachines/smwebsdk';
import { Heading } from '../Heading';

export type LinkCardProps = {
  content: ContentCard;
  style?: Record<string, 'string | CSSProperties | undefined'>;
};

export type LinkData = {
  id: string;
  url: string;
  title: string;
  description?: string;
  imageUrl?: string;
};

export function LinkCard({ content, style }: LinkCardProps) {
  const data = content.data as unknown as LinkData;
  return (
    <Card style={style}>
      <div
        data-sm-content={content.id}
        className="sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto"
      >
        {data.imageUrl && <img src={data.imageUrl} alt={data.title} />}
        <Heading type="h2">{data.title}</Heading>
        {data.description && <Text>{data.description}</Text>}
        <div className="sm-bg-white sm-sticky sm-bottom-0 sm-w-full sm-pt-5 sm-border-solid sm-border-0 sm-border-t-2 sm-border-gray-50">
          <a
            className="sm-text-white sm-no-underline"
            href={data.url}
            target="_blank"
            rel="noreferrer"
          >
            <Button>View Page</Button>
          </a>
        </div>
      </div>
    </Card>
  );
}

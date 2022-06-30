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
  description: string;
};

export function LinkCard({ content, style }: LinkCardProps) {
  const data = content.data as unknown as LinkData;
  return (
    <Card style={style}>
      <div data-sm-content={content.id} className="sm-flex sm-flex-col sm-gap-y-3 sm-items-start">
        <Heading type="h2">{data.title}</Heading>
        <Text>{data.description}</Text>
        <Button>
          <a className="sm-text-white sm-no-underline" href={data.url} target="_blank">
            View Page
          </a>
        </Button>
      </div>
    </Card>
  );
}

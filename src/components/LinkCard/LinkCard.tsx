import { Button } from '../Button';
import { Card } from '../Card';
import { Text } from '../Text';
import { ContentCard } from '@soulmachines/smwebsdk';

export type LinkCardProps = {
  content: ContentCard;
  text?: string;
};

export type LinkData = {
  id: string;
  url: string;
  title: string;
};

export function LinkCard({ content, text }: LinkCardProps) {
  const data = content.data as unknown as LinkData;
  return (
    <Card>
      <div data-sm-content={content.id} className="sm-flex sm-flex-col sm-gap-y-3 sm-items-start">
        <Text>{text}</Text>
        <Button>
          <a className="sm-text-white sm-no-underline" href={data.url} target="_blank">
            {data.title}
          </a>
        </Button>
      </div>
    </Card>
  );
}

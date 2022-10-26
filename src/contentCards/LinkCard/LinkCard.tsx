import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Text } from '../../components/Text';
import { ContentCard } from '@soulmachines/smwebsdk';
import { Heading } from '../../components/Heading';

export type LinkCardProps = {
  content: ContentCard;
  isExternal?: boolean;
  style?: Record<string, 'string | CSSProperties | undefined'>;
};

export type LinkData = {
  id: string;
  url: string;
  title: string;
  description?: string;
  imageUrl?: string;
};

export function LinkCard({ content, isExternal, style }: LinkCardProps) {
  const data = content.data as unknown as LinkData;
  const conditionalAttributes: Record<string, string> = {};

  if (isExternal) {
    conditionalAttributes['target'] = '_blank';
    conditionalAttributes['rel'] = 'noreferrer';
  }

  return (
    <Card style={style}>
      <div
        data-sm-content={content.id}
        className="sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto"
      >
        {data.imageUrl && <img src={data.imageUrl} alt={data.title} />}
        <Heading type="h2">{data.title}</Heading>
        {data.description && (
          <div className="sm-hidden md:sm-block">
            <Text>{data.description}</Text>
          </div>
        )}
        <div className="sm-bg-white sm-sticky sm-bottom-0 sm-w-full sm-pt-5 sm-border-solid sm-border-0 sm-border-t-2 sm-border-gray-lightest">
          <a className="sm-text-white sm-no-underline" href={data.url} {...conditionalAttributes}>
            <Button>View Page</Button>
          </a>
        </div>
      </div>
    </Card>
  );
}

LinkCard.defaultProps = {
  isExternal: true,
};

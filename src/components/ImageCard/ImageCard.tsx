import { ContentCard } from '@soulmachines/smwebsdk';
import { Card } from '../Card';

type ImageCardProps = {
  content: ContentCard;
  //  Styles are passed through from react spring
  style?: Record<string, 'string | CSSProperties | undefined'>;
};

type ImageData = {
  url: string;
  alt?: string;
};

export function ImageCard({ content, style }: ImageCardProps) {
  const data = content.data as unknown as ImageData;

  if (!data.url) {
    return null;
  }

  return (
    <Card isDismissible={true} flush={true} style={style}>
      <div
        data-sm-content={content.id}
        style={{ backgroundImage: `url(${data.url})` }}
        className="sm-w-full sm-h-36 sm-bg-cover sm-bg-center md:sm-h-56"
      >
        <span className="sm-sr-only">{data?.alt}</span>
      </div>
    </Card>
  );
}

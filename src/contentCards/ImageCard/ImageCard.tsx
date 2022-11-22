import { ContentCard } from '@soulmachines/smwebsdk';
import { Card } from '../../components/Card';

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
    <div className="sm-flex sm-justify-center">
      <Card flush={true} style={style}>
        <img
          data-sm-content={content.id}
          src={data.url}
          alt={data.alt}
          className="sm-mx-auto sm-object-contain sm-max-w-full sm-h-full sm-max-h-87"
        />
      </Card>
    </div>
  );
}
ImageCard.defaultProps = {
  alt: '',
};

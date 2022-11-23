import { ContentCard as SMContentCard } from '@soulmachines/smwebsdk';
import { ContentCard } from '../../appComponents/ContentCard';

type ImageCardProps = {
  content: SMContentCard;
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
      <ContentCard contentId={content.id} style={style} flush={true}>
        <img
          src={data.url}
          alt={data.alt}
          className="sm-mx-auto sm-object-contain sm-max-w-full sm-h-full sm-max-h-87"
        />
      </ContentCard>
    </div>
  );
}
ImageCard.defaultProps = {
  alt: '',
};

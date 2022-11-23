import { ContentCard as SMContentCard } from '@soulmachines/smwebsdk';

type ImageCardProps = {
  content: SMContentCard;
};

type ImageData = {
  url: string;
  alt?: string;
};

export function ImageCard({ content }: ImageCardProps) {
  const data = content.data as unknown as ImageData;

  if (!data.url) {
    return null;
  }

  return (
    <img
      src={data.url}
      alt={data.alt}
      className="sm-mx-auto sm-object-contain sm-max-w-full sm-h-full sm-max-h-87"
    />
  );
}
ImageCard.defaultProps = {
  alt: '',
};

import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { ContentCard as SMContentCard } from '@soulmachines/smwebsdk';
import { Heading } from '../../components/Heading';

export type LinkCardProps = {
  content: SMContentCard;
  isExternal?: boolean;
};

export type LinkData = {
  id: string;
  url: string;
  title: string;
  description?: string;
  imageUrl?: string;
};

export function LinkCard({ content, isExternal }: LinkCardProps) {
  const data = content.data as unknown as LinkData;
  const conditionalAttributes: Record<string, string> = {};

  if (isExternal) {
    conditionalAttributes['target'] = '_blank';
    conditionalAttributes['rel'] = 'noreferrer';
  }

  return (
    <>
      {data.imageUrl && <img src={data.imageUrl} alt={data.title} />}
      <Heading type="h2">{data.title}</Heading>
      {data.description && <Text>{data.description}</Text>}
      <div className="sm-bg-white sm-sticky sm-bottom-0 sm-w-full sm-pt-5 sm-border-solid sm-border-0 sm-border-t-2 sm-border-gray-lightest">
        <a className="sm-text-white sm-no-underline" href={data.url} {...conditionalAttributes}>
          <Button>View Page</Button>
        </a>
      </div>
    </>
  );
}

LinkCard.defaultProps = {
  isExternal: true,
};

import { ImageCard } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';
import { ContentCard } from '../../appComponents/ContentCard';
import { imageCardContent } from '../../storybook-content';

export default {
  title: `Content Cards / ImageCard`,
  component: ImageCard,
  decorators: [SMProviderDecorator],
};

export const Basic = () => (
  <ContentCard contentId="mockId" fullHeight={false} flush={true}>
    <ImageCard content={imageCardContent} />
  </ContentCard>
);

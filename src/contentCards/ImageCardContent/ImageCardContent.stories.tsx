import { ImageCardContent } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';
import { ContentCard } from '../../appComponents/ContentCard';
import { imageCardContent } from '../../storybook-content';

export default {
  title: `Content Cards / ImageCardContent`,
  component: ImageCardContent,
  decorators: [SMProviderDecorator],
};

export const Basic = () => (
  <ContentCard contentId="mockId" fullHeight={false} fullWidth={false} flush={true}>
    <ImageCardContent content={imageCardContent} />
  </ContentCard>
);

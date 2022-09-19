import { ImageCard } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';
import { imageCardContent } from '../../storybook-content';

export default {
  title: `Content Cards / ImageCard`,
  component: ImageCard,
  decorators: [SMProviderDecorator],
};

export const Basic = () => <ImageCard content={imageCardContent} />;

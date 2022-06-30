import { ImageCard } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: `Components / ImageCard`,
  component: ImageCard,
  decorators: [SMProviderDecorator],
};

const content = {
  id: 'id',
  type: 'image',
  data: {
    url: 'https://images.unsplash.com/photo-1656426885244-8012b6f6262a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
};

export const Basic = () => <ImageCard content={content} />;

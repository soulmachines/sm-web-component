import { BindPublicSmEvents } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: `Components / BindPublicSmEvents`,
  component: BindPublicSmEvents,
  decorators: [SMProviderDecorator],
};

const element = document.createElement('div');
export const Basic = () => <BindPublicSmEvents element={element} />;

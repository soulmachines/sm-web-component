import { OptionsCard } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';
import { optionsCardContent } from '../../storybook-content';

export default {
  title: `App Components / OptionsCard`,
  component: OptionsCard,
  decorators: [SMProviderDecorator],
};

export const Basic = () => <OptionsCard content={optionsCardContent} />;

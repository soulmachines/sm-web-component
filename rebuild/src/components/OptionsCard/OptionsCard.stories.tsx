import { OptionsCard } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: `Components / OptionsCard`,
  component: OptionsCard,
  decorators: [SMProviderDecorator],
};

const content = {
  data: {
    options: [
      {
        label: 'Auckland',
        value: 'auckland',
      },
      {
        label: 'Sydney',
        value: 'sydney',
      },
      {
        label: 'London',
      },
    ],
  },
};

export const Basic = () => <OptionsCard content={content} />;

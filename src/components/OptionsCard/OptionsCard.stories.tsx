import { OptionsCard } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: `App Components / OptionsCard`,
  component: OptionsCard,
  decorators: [SMProviderDecorator],
};

const content = {
  id: 'id',
  type: 'options',
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

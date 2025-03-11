import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import segment from './addons/segment';

const theme = create({
  brandTitle: 'SM Widget',
  base: 'light',
});

addons.setConfig({
  theme,
});

addons.register('storybook/segment', segment);

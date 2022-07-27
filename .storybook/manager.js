import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  brandTitle: 'SM Widget',
});

addons.setConfig({
  theme,
});

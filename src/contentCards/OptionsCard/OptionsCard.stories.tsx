import { OptionsCard } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';
import { ContentCard } from '../../appComponents/ContentCard';
import { optionsCardContent } from '../../storybook-content';

export default {
  title: `Content Cards / OptionsCard`,
  component: OptionsCard,
  decorators: [SMProviderDecorator],
  argTypes: {
    fullHeight: { control: 'boolean', defaultValue: false },
  },
};

export const Basic = ({ fullHeight }: { fullHeight: boolean }) => (
  <ContentCard contentId="mockId" fullHeight={fullHeight}>
    <OptionsCard content={optionsCardContent} />
  </ContentCard>
);

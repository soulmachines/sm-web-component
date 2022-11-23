import { ContentCard, ContentCardProps } from '.';

export default {
  title: `App Components / Content Card`,
  component: ContentCard,
  argTypes: {
    flush: { control: 'boolean', defaultValue: false },
    fullHeight: { control: 'boolean', defaultValue: false },
  },
};

export const Basic = ({ flush, fullHeight }: ContentCardProps) => {
  return (
    <ContentCard contentId="mockId" flush={flush} fullHeight={fullHeight}>
      <div>
        <p>Any content can be passed here</p>
      </div>
    </ContentCard>
  );
};

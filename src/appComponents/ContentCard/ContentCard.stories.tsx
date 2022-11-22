import { ContentCard, ContentCardProps } from '.';

export default {
  title: `App Components / Content Card`,
  component: ContentCard,
  args: {
    flush: false,
  },
};

export const Basic = ({ flush }: ContentCardProps) => {
  return (
    <ContentCard flush={flush}>
      <div>
        <p>Any content can be passed here</p>
      </div>
    </ContentCard>
  );
};

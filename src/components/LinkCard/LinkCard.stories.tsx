import { LinkCard } from '.';

export default {
  title: `Components / LinkCard`,
  component: LinkCard,
};

const content = {
  id: 'id',
  type: 'externalLink',
  data: {
    url: 'https://www.soulmachines.com',
    title: 'Soul Machines',
    imageUrl: 'https://placekitten.com/300/300',
    description: 'Placeholder',
  },
};

export const Basic = () => <LinkCard content={content} />;

import { LinkCard, LinkCardProps } from '.';

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

export default {
  title: `Components / LinkCard`,
  component: LinkCard,
  argTypes: {
    content: { control: 'object', defaultValue: content },
  },
};

export const Basic = ({ content }: LinkCardProps) => <LinkCard content={content} />;

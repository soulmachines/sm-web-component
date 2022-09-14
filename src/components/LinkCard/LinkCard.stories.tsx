import { LinkCard, LinkCardProps } from '.';

export const linkcardContent = {
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
  title: `App Components / LinkCard`,
  component: LinkCard,
  argTypes: {
    content: { control: 'object', defaultValue: linkcardContent },
    isExternal: { control: 'boolean', defaultValue: true },
  },
};

export const Basic = ({ content, isExternal }: LinkCardProps) => (
  <LinkCard content={content} isExternal={isExternal} />
);

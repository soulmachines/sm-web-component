import { LinkCard, LinkCardProps } from '.';
import { linkCardContent } from '../../storybook-content';

export default {
  title: `Content Cards / LinkCard`,
  component: LinkCard,
  argTypes: {
    content: { control: 'object', defaultValue: linkCardContent },
    isExternal: { control: 'boolean', defaultValue: true },
  },
};

export const Basic = ({ content, isExternal }: LinkCardProps) => (
  <LinkCard content={content} isExternal={isExternal} />
);

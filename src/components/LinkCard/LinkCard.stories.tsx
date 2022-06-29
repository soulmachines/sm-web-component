import { LinkCard } from '.';

export default {
  title: `Components / LinkCard`,
  component: LinkCard,
};

const content = {
  id: 'id',
  type: 'externalLink',
  data: {
    url: '"https://www.soulmachines.com"',
    title: "Soul Machines",
    imageUrl: "https://www.soulmachines.com/wp-content/themes/soulmachines/images/sm-logo.png"
  }
}

export const Basic = () => <LinkCard content={content} text="Placeholder text" />;

import { Widget } from '.';
import { WidgetProps } from './Widget';

export default {
  title: `Components / Widget`,
  component: Widget,
};

export const Basic = (props: WidgetProps) => (
  <Widget greeting={props.greeting} profilePicture={props.profilePicture} />
);
Basic.args = {
  greeting: 'A custom greeting message',
  profilePicture: 'https://assets.cdn.soulmachines.cloud/AvatarCoverImages/image-sam-l.jpg',
};

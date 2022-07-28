import { Widget } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';
import { WidgetProps } from './Widget';

export default {
  title: `App Components / Widget`,
  component: Widget,
  decorators: [SMProviderDecorator],
};

export const Basic = (props: WidgetProps) => (
  <Widget greeting={props.greeting} profilePicture={props.profilePicture} />
);
Basic.args = {
  greeting: 'A custom greeting message',
  profilePicture: 'https://assets.cdn.soulmachines.cloud/AvatarCoverImages/image-sam-l.jpg',
};

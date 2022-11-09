import { Video } from './Video';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';
import { Spinner } from '../../components/Spinner';

export default {
  title: 'App Components / Video',
  component: Video,
  decorators: [SMProviderDecorator],
};

export const Basic = () => <Video autoConnect={true} loadingIndicator={<Spinner />} />;

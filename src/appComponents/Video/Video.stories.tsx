import { Video } from './Video';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';
import { FixedHeightDecorator } from '../../../.storybook/decorators/FixedHeightDecorator';
import { Spinner } from '../../components/Spinner';

export default {
  title: 'App Components / Video',
  component: Video,
  decorators: [SMProviderDecorator, FixedHeightDecorator],
};

export const Basic = () => (
  <div className="sm-w-full sm-h-96">
    <Video autoConnect={true} loadingIndicator={<Spinner />} />
  </div>
);

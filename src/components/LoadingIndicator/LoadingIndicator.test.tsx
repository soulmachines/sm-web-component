import { render } from '@testing-library/preact';
import { LoadingIndicator, LoadingIndicatorProgress } from '.';

describe('<LoadingIndicator />', () => {
  it('renders the loader with a role of progressbar', () => {
    const { getByRole } = render(
      <LoadingIndicator progressTo={LoadingIndicatorProgress.thirtyThree} />,
    );
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  describe('when it is completed', () => {});
});

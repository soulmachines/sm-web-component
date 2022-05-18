import { render } from '@testing-library/preact';
import { SMMediaProvider } from '.';

describe('<SMMediaProvider />', () => {
  it('renders its children', () => {
    const { getByText } = render(
      <SMMediaProvider>
        <p>Child text</p>
      </SMMediaProvider>,
    );

    expect(getByText('Child text')).toBeInTheDocument();
  });
});

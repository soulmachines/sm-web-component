import { render } from '@testing-library/preact';
import { Button } from '.';

describe('<Button />', () => {
  it('render button and verify text appears in document', () => {
    const { getByText } = render(<Button>button</Button>);
    expect(getByText('button')).toBeInTheDocument();
  });
});

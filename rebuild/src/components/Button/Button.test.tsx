import { fireEvent, render } from '@testing-library/preact';
import { Button } from '.';

describe('<Button />', () => {
  it('render button and verify text appears in document', () => {
    const { getByText } = render(<Button>button</Button>);
    expect(getByText('button')).toBeInTheDocument();
  });

  it('passes the onClick function to the button', async () => {
    const mock = jest.fn();
    const { getByText } = render(<Button onClick={mock}>button</Button>);
    const button = getByText('button');
    await fireEvent.click(button);
    expect(mock).toHaveBeenCalled();
  });
});

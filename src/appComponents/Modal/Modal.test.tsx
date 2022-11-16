import { fireEvent, render } from '@testing-library/preact';
import { Modal } from '.';

describe('<Modal />', () => {
  const onCloseFn = jest.fn();
  it('does not call onCloseFn by default', () => {
    render(
      <Modal isOpen={true} onClose={onCloseFn}>
        <p>children</p>
      </Modal>,
    );
    expect(onCloseFn).not.toHaveBeenCalled();
  });

  it.skip('calls onCloseFn when the modal is clicked', async () => {
    const { getByTitle } = render(
      <Modal isOpen={true} onClose={onCloseFn}>
        <p title="children">children</p>
      </Modal>,
    );

    const button = getByTitle('Interactive Digital Person');
    await fireEvent.click(button);

    expect(onCloseFn).toHaveBeenCalledTimes(1);
  });

  it('renders children elements', () => {
    const { getByTitle } = render(
      <Modal isOpen={true} onClose={onCloseFn}>
        <p title="children">children</p>
      </Modal>,
    );

    expect(getByTitle('children')).toBeInTheDocument();
  });
});

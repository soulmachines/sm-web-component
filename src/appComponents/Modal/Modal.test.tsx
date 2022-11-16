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

  it('calls onCloseFn when the escape key is pushed', async () => {
    const { container } = render(
      <Modal isOpen={true} onClose={onCloseFn}>
        <p title="children">children</p>
      </Modal>,
    );

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

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

import { fireEvent, render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import { Modal, ModalProps } from '.';

describe('<Modal />', () => {
  const onCloseFn = jest.fn();
  const defaultProps = {
    isOpen: true,
    onClose: onCloseFn,
    title: 'Modal title',
  };
  const customRender = (props?: Partial<ModalProps>) => {
    return render(
      <Modal {...defaultProps} {...props}>
        <button>Child element 1</button>
        <button>Child element 2</button>
      </Modal>,
    );
  };

  it('should not have any accessibility violations', async () => {
    const { container } = customRender();
    expect(await axe(container)).toHaveNoViolations();
  });

  it('does not call onCloseFn by default', () => {
    customRender();
    expect(onCloseFn).not.toHaveBeenCalled();
  });

  it('calls onCloseFn when the escape key is pushed', async () => {
    const { container } = customRender();

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(onCloseFn).toHaveBeenCalledTimes(1);
  });

  it('renders children elements', () => {
    const { getByText } = customRender();

    expect(getByText('Child element 1')).toBeInTheDocument();
    expect(getByText('Child element 2')).toBeInTheDocument();
  });

  it('renders the title with a screen reader only class', () => {
    const { getByText } = customRender();
    expect(getByText('Modal title')).toHaveClass('sm-sr-only');
  });

  it('renders the description with a screen reader only class', () => {
    const { getByText } = customRender({ description: 'Modal description' });
    expect(getByText('Modal description')).toHaveClass('sm-sr-only');
  });
});

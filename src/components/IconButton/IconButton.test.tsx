import { fireEvent, render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import { IconButton } from '.';

describe('<IconButton />', () => {
  const defaultProps = {
    name: 'microphone',
    title: 'Toggle microphone',
  };

  it('should not have any accessibility violations', async () => {
    const { container } = render(<IconButton {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders button with an aria-label', () => {
    const { getByLabelText } = render(<IconButton {...defaultProps} />);
    expect(getByLabelText(defaultProps.title, { selector: 'button' })).toBeInTheDocument();
  });

  it('renders the svg icon', () => {
    const { queryByTitle } = render(<IconButton {...defaultProps} />);
    expect(queryByTitle(defaultProps.title)).toBeInTheDocument();
  });

  it('calls the passed in onClick function when the button is clicked', async () => {
    const mock = jest.fn();
    const { getByTitle } = render(<IconButton {...defaultProps} onClick={mock} />);
    const button = getByTitle(defaultProps.title);

    await fireEvent.click(button);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalled();
  });
});

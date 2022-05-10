import { fireEvent, render } from '@testing-library/preact';
import { Greeting } from '.';

describe('<Greeting />', () => {
  const defaultMessage = "Got any questions? I'm happy to help.";

  it('renders the default message when no message is provided', () => {
    const { queryByText } = render(<Greeting />);
    expect(queryByText(defaultMessage)).toBeInTheDocument();
  });

  describe('when a custom message is provided', () => {
    const message = 'My custom message';

    it('renders the custom message ', () => {
      const { queryByText } = render(<Greeting message={message} />);
      expect(queryByText(message)).toBeInTheDocument();
    });

    it('does not render the default message ', () => {
      const { queryByText } = render(<Greeting message={message} />);
      expect(queryByText(defaultMessage)).not.toBeInTheDocument();
    });
  });

  describe('when the close button is clicked', () => {
    it('renders nothing', async () => {
      const { getByRole, container } = render(<Greeting />);
      const button = getByRole('button');

      await fireEvent.click(button);

      expect(container).toBeEmptyDOMElement();
    });
  });
});

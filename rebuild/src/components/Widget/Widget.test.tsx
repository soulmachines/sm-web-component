import { render } from '@testing-library/preact';
import { Widget } from '.';

describe('<Widget />', () => {
  const defaultGreeting = "Got any questions? I'm happy to help.";

  it('renders children', () => {
    const { queryByText } = render(
      <Widget>
        <p>Some child text</p>
      </Widget>,
    );
    expect(queryByText('Some child text')).toBeInTheDocument();
  });

  it('renders a profile picture when provided', () => {
    const { queryByText } = render(<Widget profilePicture="My mock profile url" />);
    expect(queryByText('My mock profile url')).toBeInTheDocument();
  });

  describe('when a greeting is provided', () => {
    const customGreeting = 'My custom greeting';

    it('renders the custom greeting', () => {
      const { queryByText } = render(<Widget greeting={customGreeting} />);
      expect(queryByText(customGreeting)).toBeInTheDocument();
    });

    it('does not render the default greeting', () => {
      const { queryByText } = render(<Widget greeting={customGreeting} />);
      expect(queryByText(defaultGreeting)).not.toBeInTheDocument();
    });
  });

  describe('when a greeting is not provided', () => {
    it('renders the default greeting', () => {
      const { queryByText } = render(<Widget />);
      expect(queryByText(defaultGreeting)).toBeInTheDocument();
    });
  });
});

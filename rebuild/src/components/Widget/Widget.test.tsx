import { fireEvent, render } from '@testing-library/preact';
import { Widget } from '.';

const mockConnect = jest.fn();

jest.mock('../../contexts/SoulMachinesContext', () => ({
  useSoulMachines: () => ({
    connect: mockConnect,
  }),
}));

describe('<Widget />', () => {
  const defaultGreeting = "Got any questions? I'm happy to help.";

  it('does not connect automatically', () => {
    expect(mockConnect).toBeCalledTimes(0);
  });

  it('calls connect when the button is clicked', async () => {
    const { getByRole } = render(<Widget />);
    const button = getByRole('button');

    await fireEvent.click(button);

    expect(mockConnect).toBeCalledTimes(1);
  });

  it('renders children', () => {
    const { queryByText } = render(
      <Widget>
        <p>Some child text</p>
      </Widget>,
    );
    expect(queryByText('Some child text')).toBeInTheDocument();
  });

  it('renders a profile image when profilePicture is provided', () => {
    const src = 'My mock profile url';
    const { getByAltText } = render(<Widget profilePicture={src} />);
    expect(getByAltText('Digital person')).toHaveAttribute('src', src);
  });

  it('renders a default profile svg when profilePicture not provided', () => {
    const { getByTitle } = render(<Widget />);
    expect(getByTitle('Digital person')).toBeInTheDocument();
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

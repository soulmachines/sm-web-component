import { fireEvent, render } from '@testing-library/preact';
import { Card } from '.';

describe('<Card />', () => {
  it('renders the children', () => {
    const { queryByText } = render(
      <Card>
        <p>Some text</p>
      </Card>,
    );
    expect(queryByText('Some text')).toBeInTheDocument();
  });

  describe('when the close button is clicked', () => {
    it('renders nothing', async () => {
      const { getByTitle, container } = render(<Card />);
      const button = getByTitle('Hide card');

      await fireEvent.click(button);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
import { MarkdownCard } from '.';
import { render } from '@testing-library/preact';

describe('<MarkdownCard />', () => {
  const mockCard = {
    id: 'mockId',
    type: 'markdown',
    data: {
      text: '## An Interesting List\r\n 1. Most interesting\r\n 2. Less interesting\r\n 3. Least Interesting\r\n\r\n**bold**\r\n- item 1\r\n- item 2\r\n\r\n[test link](https://google.com)',
    },
  };

  it('renders data-sm-content with the card id', () => {
    const { container } = render(<MarkdownCard content={mockCard} />);
    expect(container.querySelector('[data-sm-content="mockId"]')).toBeInTheDocument();
  });

  it('renders headings', () => {
    const { container } = render(<MarkdownCard content={mockCard} />);
  });
});

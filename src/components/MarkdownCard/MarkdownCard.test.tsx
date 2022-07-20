import { MarkdownCard } from '.';
import { getByRole, render } from '@testing-library/preact';
import { ContentCard } from '@soulmachines/smwebsdk';

describe('<MarkdownCard />', () => {
  function markdownData(markdown: string): ContentCard {
    return {
      id: 'mockId',
      type: 'markdown',
      data: {
        text: markdown,
      },
    };
  }

  const mockCard: ContentCard = {
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

  it('renders headings 1 to 6 individually', () => {
    for (let hlevel = 1; hlevel < 7; hlevel++) {
      console.log(hlevel);
      const { container } = render(
        <MarkdownCard content={markdownData('#'.repeat(hlevel) + ' Heading')} />,
      );

      expect(container.querySelector('h' + hlevel)).toBeInTheDocument();
    }
  });

  it('renders unordered list', () => {
    const markdown = `- item 1
- item 2
- item 3
`;
    const { container } = render(<MarkdownCard content={markdownData(markdown)} />);
    expect(container.querySelector('ul')).toBeInTheDocument();
    expect(container.querySelector('li')).toBeInTheDocument();
    expect(container.querySelectorAll('li').length).toBe(3);
  });

  it('renders ordered list', () => {
    const markdown = `1. item 1
2. item 2
3. item 3
`;
    const { container } = render(<MarkdownCard content={markdownData(markdown)} />);
    expect(container.querySelector('ol')).toBeInTheDocument();
    expect(container.querySelector('li')).toBeInTheDocument();
    expect(container.querySelectorAll('li').length).toBe(3);
  });

  it('renders bold', () => {
    const markdown = `**bold text**
`;
    const { container } = render(<MarkdownCard content={markdownData(markdown)} />);
    expect(container.querySelector('strong')).toBeInTheDocument();
    expect(container.querySelectorAll('strong').length).toBe(1);
  });

  it('renders emphasis', () => {
    const markdown = `*emphasized text*
`;
    const { container } = render(<MarkdownCard content={markdownData(markdown)} />);
    expect(container.querySelector('em')).toBeInTheDocument();
    expect(container.querySelectorAll('em').length).toBe(1);
  });

  it('renders external link', () => {
    Object.defineProperty(window, 'location', { value: { hostname: 'mycurrentwebpage.com' } });

    const markdown = `[external link](https://www.google.com)
`;
    const { getByRole } = render(<MarkdownCard content={markdownData(markdown)} />);
    const element = getByRole('link', { name: 'external link' });
    expect(getByRole('link', { name: 'external link' })).toHaveAttribute(
      'href',
      'https://www.google.com',
    );
    expect(getByRole('link', { name: 'external link' })).toHaveAttribute('target', '_blank');
  });

  it('renders internal link', () => {
    Object.defineProperty(window, 'location', { value: { hostname: 'mycurrentwebpage.com' } });

    const markdown = `[internal link](http://mycurrentwebpage.com/moreinfo);
`;
    const { getByRole } = render(<MarkdownCard content={markdownData(markdown)} />);
    expect(getByRole('link', { name: 'internal link' })).toHaveAttribute(
      'href',
      'http://mycurrentwebpage.com/moreinfo',
    );
    expect(getByRole('link', { name: 'internal link' })).not.toHaveAttribute('target');
  });

  it('renders nothing if nothing received', () => {
    const markdown = '';

    const { container } = render(<MarkdownCard content={markdownData(markdown)} />);
    expect(container).toBeEmptyDOMElement();
  });
});

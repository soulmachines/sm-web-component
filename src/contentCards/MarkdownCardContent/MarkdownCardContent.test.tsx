import { MarkdownCardContent } from '.';
import { render } from '@testing-library/preact';
import { ContentCard } from '@soulmachines/smwebsdk';

describe('<MarkdownCardContent />', () => {
  function markdownData(markdown: string): ContentCard {
    return {
      id: 'mockId',
      type: 'markdown',
      data: {
        text: markdown,
      },
    };
  }

  it('renders nothing if nothing received', () => {
    const markdown = '';

    const { container } = render(<MarkdownCardContent content={markdownData(markdown)} />);
    expect(container).toBeEmptyDOMElement();
  });
});

import { MarkdownCard } from '.';
import { render } from '@testing-library/preact';
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

  it('renders nothing if nothing received', () => {
    const markdown = '';

    const { container } = render(<MarkdownCard content={markdownData(markdown)} />);
    expect(container).toBeEmptyDOMElement();
  });
});

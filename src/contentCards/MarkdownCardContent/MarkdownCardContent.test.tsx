import { MarkdownCardContent } from '.';
import { render } from '@testing-library/preact';
import { ContentCard } from '@soulmachines/smwebsdk';
import { axe } from 'jest-axe';

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

  it('should not have any accessibility violations', async () => {
    const { container } = render(<MarkdownCardContent content={markdownData('')} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders nothing if nothing received', () => {
    const { container } = render(<MarkdownCardContent content={markdownData('')} />);
    expect(container).toBeEmptyDOMElement();
  });
});

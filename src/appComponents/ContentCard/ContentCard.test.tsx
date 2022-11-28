import { render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import { ContentCard, ContentCardProps } from '.';

describe('<ContentCard />', () => {
  const customRender = (props: Partial<ContentCardProps> = {}) =>
    render(
      <ContentCard fullHeight={false} contentId="mockId" {...props}>
        <p>Some text</p>
      </ContentCard>,
    );

  it('should not have any accessibility violations', async () => {
    const { container } = customRender();
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the content id', () => {
    const { container } = customRender();
    expect(container.querySelector('[data-sm-content="mockId"]')).toBeInTheDocument();
  });

  it('renders the children', () => {
    const { queryByText } = customRender();
    expect(queryByText('Some text')).toBeInTheDocument();
  });

  it('renders the card with padding by default', () => {
    const { container } = customRender();
    expect(container.querySelector('.sm-p-6')).toBeInTheDocument();
  });

  it('renders the card with no padding when flush is true', () => {
    const { container } = customRender({ flush: true });
    expect(container.querySelector('.sm-p-6')).not.toBeInTheDocument();
  });
});

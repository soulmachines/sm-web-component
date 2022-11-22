import { render } from '@testing-library/preact';
import { ContentCard } from '.';

describe('<ContentCard />', () => {
  it('renders the children', () => {
    const { queryByText } = render(
      <ContentCard>
        <p>Some text</p>
      </ContentCard>,
    );
    expect(queryByText('Some text')).toBeInTheDocument();
  });

  it('renders the card with padding by default', () => {
    const { container } = render(
      <ContentCard>
        <p>Some text</p>
      </ContentCard>,
    );

    expect(container.querySelector('.sm-p-6')).toBeInTheDocument();
  });

  it('renders the card with no padding when flush is true', () => {
    const { container } = render(
      <ContentCard flush={true}>
        <p>Some text</p>
      </ContentCard>,
    );

    expect(container.querySelector('.sm-p-6')).not.toBeInTheDocument();
  });
});

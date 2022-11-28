import { render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should not have any accessibility violations', async () => {
    const { container } = render(<Heading type="h1">Hello</Heading>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the heading text', () => {
    const { getByText } = render(<Heading type="h1">Hello</Heading>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('renders a single heading as an h1 tag when type is h1', () => {
    const { getByRole, container } = render(<Heading type="h1">Hello</Heading>);
    expect(getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).toHaveLength(1);
  });

  it('renders a single heading as an h2 tag when type is h2', () => {
    const { getByRole, container } = render(<Heading type="h2">Hello</Heading>);
    expect(getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).toHaveLength(1);
  });

  it('renders a single heading as an h3 tag when type is h3', () => {
    const { getByRole, container } = render(<Heading type="h3">Hello</Heading>);
    expect(getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).toHaveLength(1);
  });

  it('renders a single heading as an h4 tag when type is h4', () => {
    const { getByRole, container } = render(<Heading type="h4">Hello</Heading>);
    expect(getByRole('heading', { level: 4 })).toBeInTheDocument();
    expect(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).toHaveLength(1);
  });

  it('renders a single heading as an h5 tag when type is h5', () => {
    const { getByRole, container } = render(<Heading type="h5">Hello</Heading>);
    expect(getByRole('heading', { level: 5 })).toBeInTheDocument();
    expect(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).toHaveLength(1);
  });

  it('renders a single heading as an h6 tag when type is h6', () => {
    const { getByRole, container } = render(<Heading type="h6">Hello</Heading>);
    expect(getByRole('heading', { level: 6 })).toBeInTheDocument();
    expect(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).toHaveLength(1);
  });
});

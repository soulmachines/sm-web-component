import { render } from '@testing-library/preact';
import { Box } from '.';

describe('<Box />', () => {
  const defaultProps = {
    rounded: false,
    border: false,
  };
  const customRender = (props: { rounded: boolean; border: boolean } = defaultProps) =>
    render(
      <Box {...props}>
        <p>Hello</p>
      </Box>,
    );

  it('renders the children', () => {
    const { queryByText } = customRender();

    expect(queryByText('Hello')).toBeInTheDocument();
  });

  it('does not render the border classes', () => {
    const { container } = customRender();

    expect(container.querySelector('.sm-border-2')).not.toBeInTheDocument();
    expect(container.querySelector('.sm-border-solid')).not.toBeInTheDocument();
    expect(container.querySelector('.sm-border-gray-lightest')).not.toBeInTheDocument();
  });

  it('does not render the rounded classes', () => {
    const { container } = customRender();

    expect(container.querySelector('.sm-rounded-xl')).not.toBeInTheDocument();
  });

  it('renders the border classes when border prop is true', () => {
    const { container } = customRender({ ...defaultProps, border: true });

    expect(container.querySelector('.sm-border-2')).toBeInTheDocument();
    expect(container.querySelector('.sm-border-solid')).toBeInTheDocument();
    expect(container.querySelector('.sm-border-gray-lightest')).toBeInTheDocument();
  });

  it('renders the rounded classes when rounded prop is true', () => {
    const { container } = customRender({ ...defaultProps, rounded: true });

    expect(container.querySelector('.sm-rounded-xl')).toBeInTheDocument();
  });
});

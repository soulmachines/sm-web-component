import { render } from '@testing-library/preact';
import { Text } from '.';

describe('<Text />', () => {
  const text = 'Hello, I am some text';
  it('allows data attributes to be set', () => {
    const { container } = render(<Text data-sm-cy="test">{text}</Text>);
    expect(container.querySelector('[data-sm-cy="test"]')).toBeInTheDocument();
  });

  describe('it defaults the size to md', () => {
    const customRender = () => render(<Text>{text}</Text>);

    it('renders the text', () => {
      const { getByText } = customRender();
      expect(getByText(text)).toBeInTheDocument();
    });

    it('renders the medium size classes', () => {
      const { getByText } = customRender();
      expect(getByText(text).className).toContain('sm-text-sm md:sm-text-base');
    });

    it('does not render the other class sizes', () => {
      const { getByText } = customRender();
      expect(getByText(text).className).not.toContain(
        'sm-text-xs sm-text-base md:sm-text-sm md:sm-text-lg',
      );
    });
  });

  describe('when the size is set to sm', () => {
    const customRender = () => render(<Text size="sm">{text}</Text>);

    it('renders the small size classes', () => {
      const { getByText } = customRender();
      expect(getByText(text).className).toContain('sm-text-xs md:sm-text-sm');
    });

    it('does not render the other class sizes', () => {
      const { getByText } = customRender();
      expect(getByText(text).className).not.toContain(
        'sm-text-base sm-text-sm md:sm-text-base md:sm-text-lg',
      );
    });
  });

  describe('when the size is set to lg', () => {
    const customRender = () => render(<Text size="lg">{text}</Text>);

    it('renders the small lg classes', () => {
      const { getByText } = customRender();
      expect(getByText(text).className).toContain('sm-text-base md:sm-text-lg');
    });

    it('does not render the other class sizes', () => {
      const { getByText } = customRender();
      expect(getByText(text).className).not.toContain(
        'sm-text-sm sm-text-xs md:sm-text-sm md:sm-text-base',
      );
    });
  });
});

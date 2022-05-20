import { render } from '@testing-library/preact';
import { Text } from '.';

describe('<Text />', () => {
  describe('it defaults the size to md', () => {
    const customRender = () => render(<Text>Hello, I am some text.</Text>);

    it('renders the text', () => {
      const { getByText } = customRender();
      expect(getByText('Hello, I am some text.')).toBeInTheDocument();
    });

    it('renders the medium size class', () => {
      const { container } = customRender();
      expect(container.querySelector('.sm-text-base')).toBeInTheDocument();
    });

    it('does not render the other class sizes', () => {
      const { container } = customRender();

      expect(container.querySelector('.sm-text-sm')).not.toBeInTheDocument();
      expect(container.querySelector('.sm-text-lg')).not.toBeInTheDocument();
    });
  });

  describe('when the size is set to sm', () => {
    const customRender = () => render(<Text size="sm">Hello, I am some text.</Text>);

    it('renders the small size class', () => {
      const { container } = customRender();
      expect(container.querySelector('.sm-text-sm')).toBeInTheDocument();
    });

    it('does not render the other class sizes', () => {
      const { container } = customRender();
      expect(container.querySelector('.sm-text-base')).not.toBeInTheDocument();
      expect(container.querySelector('.sm-text-lg')).not.toBeInTheDocument();
    });
  });

  describe('when the size is set to lg', () => {
    const customRender = () => render(<Text size="lg">Hello, I am some text.</Text>);

    it('renders the small lg class', () => {
      const { container } = customRender();
      expect(container.querySelector('.sm-text-lg')).toBeInTheDocument();
    });

    it('does not render the other class sizes', () => {
      const { container } = customRender();
      expect(container.querySelector('.sm-text-sm')).not.toBeInTheDocument();
      expect(container.querySelector('.sm-text-base')).not.toBeInTheDocument();
    });
  });
});

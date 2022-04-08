import { render } from '@testing-library/preact';
import { Video } from '.';

let mockIsConnecting: boolean;

jest.mock('../../contexts/SoulMachinesContext', () => ({
  useSoulMachines: () => ({
    isConnecting: mockIsConnecting,
    scene: () => {},
  }),
}));

describe('<Video />', () => {
  describe('when it is not connecting', () => {
    beforeEach(() => {
      mockIsConnecting = false;
    });

    it('renders a video', () => {
      const { container } = render(<Video />);
      expect(container.querySelector('video')).toBeInTheDocument();
    });

    it('does not render a svg', () => {
      const { container } = render(<Video />);
      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });
  });

  describe('when it is connecting', () => {
    beforeEach(() => {
      mockIsConnecting = true;
    });

    it('renders a svg', () => {
      const { container } = render(<Video />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('does not render a video', () => {
      const { container } = render(<Video />);
      expect(container.querySelector('video')).not.toBeInTheDocument();
    });
  });
});

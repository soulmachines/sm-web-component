import { render } from '@testing-library/preact';
import { ListeningStatus } from '.';

describe('<ListeningStatus />', () => {
  describe('when status is dpSpeaking', () => {
    it('renders a digital person speaking animation', () => {
      const { queryByText } = render(<ListeningStatus status="dpSpeaking" />);
      expect(queryByText('Digital Person Speaking')).toBeInTheDocument();
    });

    it('does not render the other animations', () => {
      const { queryByText } = render(<ListeningStatus status="dpSpeaking" />);
      expect(queryByText('Digital Person Waiting')).not.toBeInTheDocument();
      expect(queryByText('User Speaking')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Processing')).not.toBeInTheDocument();
    });
  });

  describe('when status is dpIdle', () => {
    it('renders a digital person waiting animation', () => {
      const { queryByText } = render(<ListeningStatus status="dpIdle" />);
      expect(queryByText('Digital Person Waiting')).toBeInTheDocument();
    });

    it('does not render the other animations', () => {
      const { queryByText } = render(<ListeningStatus status="dpIdle" />);
      expect(queryByText('Digital Person Speaking')).not.toBeInTheDocument();
      expect(queryByText('User Speaking')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Processing')).not.toBeInTheDocument();
    });
  });

  describe('when status is userSpeaking', () => {
    it('renders a user speaking animation', () => {
      const { queryByText } = render(<ListeningStatus status="userSpeaking" />);
      expect(queryByText('User Speaking')).toBeInTheDocument();
    });

    it('does not render the other animations', () => {
      const { queryByText } = render(<ListeningStatus status="userSpeaking" />);
      expect(queryByText('Digital Person Speaking')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Waiting')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Processing')).not.toBeInTheDocument();
    });
  });

  describe('when status is dpProcessing', () => {
    it('renders a digital person processing animation', () => {
      const { queryByText } = render(<ListeningStatus status="dpProcessing" />);
      expect(queryByText('Digital Person Processing')).toBeInTheDocument();
    });

    it('does not render the other animations', () => {
      const { queryByText } = render(<ListeningStatus status="dpProcessing" />);
      expect(queryByText('Digital Person Speaking')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Waiting')).not.toBeInTheDocument();
      expect(queryByText('User Speaking')).not.toBeInTheDocument();
    });
  });
});

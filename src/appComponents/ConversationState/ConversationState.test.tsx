import { render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import { ConversationState } from '.';

describe('<ConversationState />', () => {
  it('should not have any accessibility violations', async () => {
    const { container } = render(<ConversationState state="dpSpeaking" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  describe('when state is dpSpeaking', () => {
    it('renders a digital person speaking animation', () => {
      const { queryByText } = render(<ConversationState state="dpSpeaking" />);
      expect(queryByText('Digital Person Speaking')).toBeInTheDocument();
    });

    it('does not render the other animations', () => {
      const { queryByText } = render(<ConversationState state="dpSpeaking" />);
      expect(queryByText('Digital Person Waiting')).not.toBeInTheDocument();
      expect(queryByText('User Speaking')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Processing')).not.toBeInTheDocument();
    });
  });

  describe('when state is idle', () => {
    it('renders a digital person waiting animation', () => {
      const { queryByText } = render(<ConversationState state="idle" />);
      expect(queryByText('Digital Person Waiting')).toBeInTheDocument();
    });

    it('does not render the other animations', () => {
      const { queryByText } = render(<ConversationState state="idle" />);
      expect(queryByText('Digital Person Speaking')).not.toBeInTheDocument();
      expect(queryByText('User Speaking')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Processing')).not.toBeInTheDocument();
    });
  });

  describe('when state is userSpeaking', () => {
    it('renders a user speaking animation', () => {
      const { queryByText } = render(<ConversationState state="userSpeaking" />);
      expect(queryByText('User Speaking')).toBeInTheDocument();
    });

    it('does not render the other animations', () => {
      const { queryByText } = render(<ConversationState state="userSpeaking" />);
      expect(queryByText('Digital Person Speaking')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Waiting')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Processing')).not.toBeInTheDocument();
    });
  });

  describe('when state is dpProcessing', () => {
    it('renders a digital person processing animation', () => {
      const { queryByText } = render(<ConversationState state="dpProcessing" />);
      expect(queryByText('Digital Person Processing')).toBeInTheDocument();
    });

    it('does not render the other animations', () => {
      const { queryByText } = render(<ConversationState state="dpProcessing" />);
      expect(queryByText('Digital Person Speaking')).not.toBeInTheDocument();
      expect(queryByText('Digital Person Waiting')).not.toBeInTheDocument();
      expect(queryByText('User Speaking')).not.toBeInTheDocument();
    });
  });
});

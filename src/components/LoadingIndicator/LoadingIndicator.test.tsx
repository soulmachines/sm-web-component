import { render } from '@testing-library/preact';
import { useSpring } from 'react-spring';
import { vi } from 'vitest';
import { LoadingIndicator } from '.';

vi.mock('react-spring', async () => {
  return {
    ...(await vi.importActual<any>('react-spring')),
    useSpring: vi.fn(() => ({ number: { to: vi.fn(() => 0) } })),
  };
});

describe('<LoadingIndicator />', () => {
  const defaultProps = {
    stepName: 'Idle',
    percentageLoaded: 0,
    totalSteps: 4,
  };

  it('has the attribute aria-label with the value of Loading...', () => {
    const { getByRole } = render(<LoadingIndicator {...defaultProps} />);
    expect(getByRole('progressbar')).toHaveAttribute('aria-label', 'Loading...');
  });

  it('renders the text 0', () => {
    const { getByText } = render(<LoadingIndicator {...defaultProps} />);
    expect(getByText('0')).toBeInTheDocument();
  });

  it('calls useSpring with the default duration of 10,000ms', () => {
    render(<LoadingIndicator {...defaultProps} />);
    expect(useSpring).toHaveBeenCalledWith(
      expect.objectContaining({
        config: {
          duration: 10000,
        },
      }),
    );
  });

  it('calls useSpring with the custom duration when provided', () => {
    const customDuration = 1234;
    render(<LoadingIndicator {...defaultProps} durationMs={customDuration} />);
    expect(useSpring).toHaveBeenCalledWith(
      expect.objectContaining({
        config: {
          duration: customDuration,
        },
      }),
    );
  });

  it('has the attribute aria-busy with the value of false when loaded', () => {
    const { getByRole } = render(<LoadingIndicator {...defaultProps} percentageLoaded={100} />);
    expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'false');
  });

  describe('when the progress is 0', () => {
    it('has the classes translate y 8 and opacity 60', () => {
      const { getByRole } = render(<LoadingIndicator {...defaultProps} />);
      expect(getByRole('progressbar').className).toContain('sm-translate-y-8 sm-opacity-60');
    });

    it('has the attribute aria-busy with the value of true', () => {
      const { getByRole } = render(<LoadingIndicator {...defaultProps} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'true');
    });

    it('has the attribute aria-valuenow with the value of 0', () => {
      const { getByRole } = render(<LoadingIndicator {...defaultProps} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    });

    it('renders step name', () => {
      const { getByText } = render(<LoadingIndicator {...defaultProps} />);
      expect(getByText('Idle')).toBeInTheDocument();
    });

    it('calls useSpring for the counter with the from number 0 and the next step amount of 25', () => {
      render(<LoadingIndicator {...defaultProps} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          to: {
            number: 25,
          },
          from: {
            number: 0,
          },
        }),
      );
    });

    it('calls useSpring for the progress bar with the from width 0% and the next step amount of 25%', () => {
      render(<LoadingIndicator {...defaultProps} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          to: {
            width: '25%',
          },
          from: {
            width: '0%',
          },
        }),
      );
    });
  });

  describe('when progress changes', () => {
    const updatedProps = {
      stepName: 'mock step',
      percentageLoaded: 50,
      totalSteps: 4,
    };

    it('does not the classes translate y 8 and opacity 60', () => {
      const { getByRole, rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(getByRole('progressbar').className).not.toContain('sm-translate-y-8 sm-opacity-60');
    });

    it('has the attribute aria-busy with the value of true', () => {
      const { getByRole, rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'true');
    });

    it('has the attribute aria-valuenow with the value of 50', () => {
      const { getByRole, rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
    });

    it('renders step name', () => {
      const { getByText, rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(getByText('mock step')).toBeInTheDocument();
    });

    it('calls useSpring with the from number 50 and the next step amount of 75', () => {
      const { rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            number: 50,
          },
          to: {
            number: 75,
          },
        }),
      );
    });

    it('calls useSpring with the from width 50% and and the next step amount of 75%', () => {
      const { rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            width: '50%',
          },
          to: {
            width: '75%',
          },
        }),
      );
    });
  });
});

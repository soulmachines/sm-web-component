import { render } from '@testing-library/preact';
import { useSpring } from 'react-spring';
import { LoadingIndicator } from '.';

jest.mock('react-spring', () => {
  const originalModule = jest.requireActual('react-spring');
  return {
    ...originalModule,
    useSpring: jest.fn(() => ({ number: { to: jest.fn(() => 0) } })),
  };
});

describe('<LoadingIndicator />', () => {
  const defaultProps = {
    stepName: 'Idle',
    progress: 0,
    totalSteps: 3,
  };

  it('has the attribute aria-label with the value of Loading...', () => {
    const { getByRole } = render(<LoadingIndicator {...defaultProps} />);
    expect(getByRole('progressbar')).toHaveAttribute('aria-label', 'Loading...');
  });

  it('renders the text 0', () => {
    const { getByText } = render(<LoadingIndicator {...defaultProps} />);
    expect(getByText('0')).toBeInTheDocument();
  });

  it('calls useSpring with the default duration of 1500', () => {
    render(<LoadingIndicator {...defaultProps} />);
    expect(useSpring).toHaveBeenCalledWith(
      expect.objectContaining({
        config: {
          duration: 1500,
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

    it('calls useSpring for the counter with the from number: 0 and to: 0', () => {
      render(<LoadingIndicator {...defaultProps} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          to: {
            number: 0,
          },
          from: {
            number: 0,
          },
        }),
      );
    });

    it('calls useSpring for the progress bar with the from width: 0% and to: 0%', () => {
      render(<LoadingIndicator {...defaultProps} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          to: {
            width: '0%',
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
      progress: 50,
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

    it('has the attribute aria-valuenow with the value of 33', () => {
      const { getByRole, rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
    });

    it('renders step name', () => {
      const { getByText, rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(getByText('mock step')).toBeInTheDocument();
    });

    it('calls useSpring with the from number: 0 and to: 50', () => {
      const { rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            number: 0,
          },
          to: {
            number: 50,
          },
        }),
      );
    });

    it('calls useSpring with the from width: 0% and to: 50%', () => {
      const { rerender } = render(<LoadingIndicator {...defaultProps} />);
      rerender(<LoadingIndicator {...updatedProps} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            width: '0%',
          },
          to: {
            width: '50%',
          },
        }),
      );
    });
  });
});

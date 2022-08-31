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
    currentStep: 0,
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

  describe('when in step 0 of 3', () => {
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

  describe('when in step 1 of 3', () => {
    const props = {
      stepName: 'mock step 1 name',
      currentStep: 1,
      totalSteps: 3,
    };

    it('does not the classes translate y 8 and opacity 60', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar').className).not.toContain('sm-translate-y-8 sm-opacity-60');
    });

    it('has the attribute aria-busy with the value of true', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'true');
    });

    it('has the attribute aria-valuenow with the value of 33', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '33');
    });

    it('renders step name', () => {
      const { getByText } = render(<LoadingIndicator {...props} />);
      expect(getByText('mock step 1 name')).toBeInTheDocument();
    });

    it('calls useSpring with the from number: 0 and to: 33', () => {
      render(<LoadingIndicator {...props} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            number: 0,
          },
          to: {
            number: 33,
          },
        }),
      );
    });

    it('calls useSpring with the from width: 0% and to: 33%', () => {
      render(<LoadingIndicator {...props} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            width: '0%',
          },
          to: {
            width: '33%',
          },
        }),
      );
    });
  });

  describe('when in step 2 of 3', () => {
    const props = {
      stepName: 'mock step 2 name',
      currentStep: 2,
      totalSteps: 3,
    };

    it('has the attribute aria-busy with the value of true', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'true');
    });

    it('has the attribute aria-valuenow with the value of 66', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '66');
    });

    it('renders step name', () => {
      const { getByText } = render(<LoadingIndicator {...props} />);
      expect(getByText('mock step 2 name')).toBeInTheDocument();
    });

    it('calls useSpring with the from number: 33 and to: 66', () => {
      render(<LoadingIndicator {...props} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            number: 33,
          },
          to: {
            number: 66,
          },
        }),
      );
    });

    it('calls useSpring with the from width: 33% and to: 66%', () => {
      render(<LoadingIndicator {...props} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            width: '33%',
          },
          to: {
            width: '66%',
          },
        }),
      );
    });
  });

  describe('when in step 3 of 3', () => {
    const props = {
      stepName: 'mock step 3 name',
      currentStep: 3,
      totalSteps: 3,
    };

    it('has the attribute aria-busy with the value of false', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'false');
    });

    it('has the attribute aria-valuenow with the value of 100', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    });

    it('renders step name', () => {
      const { getByText } = render(<LoadingIndicator {...props} />);
      expect(getByText('mock step 3 name')).toBeInTheDocument();
    });

    it('calls useSpring with the from number: 67 and to: 100', () => {
      render(<LoadingIndicator {...props} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            number: 67,
          },
          to: {
            number: 100,
          },
        }),
      );
    });

    it('calls useSpring with the from width: 67% and to: 100%', () => {
      render(<LoadingIndicator {...props} />);
      expect(useSpring).toHaveBeenCalledWith(
        expect.objectContaining({
          from: {
            width: '67%',
          },
          to: {
            width: '100%',
          },
        }),
      );
    });
  });

  describe('when the current step is larger than the total steps', () => {
    const props = {
      ...defaultProps,
      currentStep: 5,
      totalSteps: 4,
    };

    it('has the attribute aria-valuenow with the value of 0', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    });

    it('has the attribute aria-busy with the value of false', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'false');
    });
  });

  describe('when the current and total steps are negative numbers', () => {
    const props = {
      ...defaultProps,
      currentStep: -5,
      totalSteps: -4,
    };

    it('has the attribute aria-busy with the value of true', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'true');
    });

    it('has the attribute aria-valuenow with the value of 0', () => {
      const { getByRole } = render(<LoadingIndicator {...props} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    });
  });
});

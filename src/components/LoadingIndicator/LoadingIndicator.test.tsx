import { render } from '@testing-library/preact';
import { LoadingIndicator, ProgressStage } from '.';

describe('<LoadingIndicator />', () => {
  it('has the aria-busy value of true', () => {
    const { getByRole } = render(<LoadingIndicator progressTo={ProgressStage.idle} />);
    expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'true');
  });

  describe('when it is in step 1', () => {
    it('has the aria-busy value of true', () => {
      const { getByRole } = render(<LoadingIndicator progressTo={ProgressStage.step1} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'true');
    });

    it('has the aria-valuenow value of 0', () => {
      const { getByRole } = render(<LoadingIndicator progressTo={ProgressStage.step1} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    });
  });

  describe('when it is in step 2', () => {
    it('has the aria-busy value of true', () => {
      const { getByRole } = render(<LoadingIndicator progressTo={ProgressStage.step2} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'true');
    });

    it('has the aria-valuenow value of 33', () => {
      const { getByRole } = render(<LoadingIndicator progressTo={ProgressStage.step2} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '33');
    });
  });

  describe('when it is in step 3', () => {
    it('has the aria-busy value of true', () => {
      const { getByRole } = render(<LoadingIndicator progressTo={ProgressStage.step3} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'true');
    });

    it('has the aria-valuenow value of 66', () => {
      const { getByRole } = render(<LoadingIndicator progressTo={ProgressStage.step3} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '66');
    });
  });

  describe('when it is completed', () => {
    it('has the aria-busy value of false', () => {
      const { getByRole } = render(<LoadingIndicator progressTo={ProgressStage.completed} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-busy', 'false');
    });

    it('has the aria-valuenow value of 100', () => {
      const { getByRole } = render(<LoadingIndicator progressTo={ProgressStage.completed} />);
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    });
  });
});

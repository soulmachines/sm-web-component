import { render } from '@testing-library/preact';
import { FloatingContainerAnimation } from './FloatingContainerAnimation';

jest.mock('../../../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<FloatingContainerAnimation />', () => {
  it('renders the child content', () => {
    const { queryByText } = render(
      <FloatingContainerAnimation animate={true}>
        <p>Mock content</p>
      </FloatingContainerAnimation>,
    );
    expect(queryByText('Mock content')).toBeInTheDocument();
  });
});

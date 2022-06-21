import { fireEvent, render } from '@testing-library/preact';
import { IconButton } from '.';

describe('<IconButton />', () => {
    it('renders the svg icon', () => {
        const { queryByTitle } = render(<IconButton name={'microphone'} title={"microphone"}/>);
        expect(queryByTitle('microphone')).toBeInTheDocument();
    });

    it('calls the passed in onClick function when the button is clicked', async () => {
        const mock = jest.fn();
        const { getByTitle } = render(
          <IconButton name={'microphone'} title={'microphone'} onClick={mock} />,
        );
        const button = getByTitle('microphone');
    
        await fireEvent.click(button);
        expect(mock).toHaveBeenCalled();expect(mock).toHaveBeenCalled();
    });
});

import { fireEvent, render } from '@testing-library/preact';
import { IconButton } from '.';

describe('<IconButton />', () => {
    it('renders the svg icon', () => {
        const { queryByTitle } = render(<IconButton name={'microphone'} title={"microphone"}/>);
        expect(queryByTitle('microphone')).toBeInTheDocument();
    });

    it('passes the onClick function to the button', async () => {
        const mock = jest.fn();
        const { queryByTitle } = render(<IconButton name={'microphone'} title={'microphone'} onClick={mock}/>);
        const button = queryByTitle('microphone');
        expect(button).not.toBeNull();
        if (button) {
            await fireEvent.click(button);
            expect(mock).toHaveBeenCalled();
        }
    });
});

import { fireEvent, render } from '@testing-library/preact';
import { IconButton } from '.';

describe('<IconButton />', () => {
    it('render button and verify it appears in document', () => {
        const { queryByTitle } = render(<IconButton name={'microphone'} title={"microphone"}/>);
        expect(queryByTitle('microphone')).toBeInTheDocument();
    });
});

import { render } from '@testing-library/preact';
import { IconButton, StyleType } from '.';

describe('<IconButton />', () => {
    it('render button and verify it appears in document', () => {
        const { container } = render(<IconButton name={'microphone'} styleType={StyleType.default}/>);
        const svg = container.querySelector('svg');

        expect(svg).not.toBeNull();
    });
});

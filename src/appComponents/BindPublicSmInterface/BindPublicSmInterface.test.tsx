import { render } from '@testing-library/preact';
import { BindPublicSmInterface } from '.';
import * as SoulMachinesContext from '../../contexts/SoulMachinesContext';
import { SMWidgetElement } from '../../web-components/sm-widget/SMWidget/SMWidget';

jest.mock('../../contexts/SoulMachinesContext/SoulMachinesContext');

describe('<BindPublicSmInterface />', () => {
  const element: SMWidgetElement = document.createElement('div');

  it('exposes `persona` as a property of the element', () => {
    const { persona } = SoulMachinesContext.useSoulMachines();
    render(<BindPublicSmInterface element={element} />);

    expect(element.persona).toBe(persona);
  });

  it('exposes `scene` as a property of the element', () => {
    const { scene } = SoulMachinesContext.useSoulMachines();
    render(<BindPublicSmInterface element={element} />);

    expect(element.scene).toBe(scene);
  });
});

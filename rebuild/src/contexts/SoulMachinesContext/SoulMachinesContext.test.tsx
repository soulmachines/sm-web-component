import { Scene } from '@soulmachines/smwebsdk';
import { render } from '@testing-library/preact';
import { SoulMachinesProvider } from '.';
import { useConnection } from '../../hooks/useConnection';

const mockConnect = jest.fn();
const mockScene = { scene: 'mock' };
jest.mock('@soulmachines/smwebsdk', () => ({
  Scene: jest.fn(() => mockScene),
}));
jest.mock('../../hooks/useConnection', () => ({
  useConnection: jest.fn(() => ({ connect: mockConnect })),
}));

describe('<SoulMachinesProvider />', () => {
  const apiKey = 'mock api key';
  const tokenServer = 'mock token server';

  const customRender = () =>
    render(
      <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
        <p>mock child</p>
      </SoulMachinesProvider>,
    );

  it('creates a Scene passing in an api key and video element', () => {
    customRender();

    expect(Scene).toHaveBeenCalledWith({
      apiKey,
      videoElement: document.createElement('video'),
    });
  });

  it('creates a Scene once', () => {
    customRender();
    expect(Scene).toHaveBeenCalledTimes(1);
  });

  it('does not call connect', () => {
    customRender();
    expect(mockConnect).not.toHaveBeenCalled();
  });

  it('calls useConnect with scene and the token server', () => {
    customRender();
    expect(useConnection).toHaveBeenCalledWith(mockScene, tokenServer);
  });
});

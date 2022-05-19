import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useSMMedia } from '.';

const mockIsConnected = jest.fn(() => false);
const mockSetMediaDeviceActive = jest.fn();
const mockScene = {
  isConnected: mockIsConnected,
  setMediaDeviceActive: mockSetMediaDeviceActive,
  isMicrophoneActive: jest.fn(() => false),
} as unknown as Scene;
jest.mock('@soulmachines/smwebsdk', () => ({
  Scene: jest.fn(() => mockScene),
}));

describe('useSMMedia()', () => {
  it('returns a toggleMicrophone function', () => {
    const { result } = renderHook(() => useSMMedia(mockScene));
    expect(typeof result.current.toggleMicrophone).toEqual('function');
  });

  it('returns isMicrophoneEnabled defaulted to false', () => {
    const { result } = renderHook(() => useSMMedia(mockScene));
    expect(result.current.isMicrophoneEnabled).toEqual(false);
  });

  it('does not call setMediaDeviceActive', () => {
    renderHook(() => useSMMedia(mockScene));
    expect(mockSetMediaDeviceActive).not.toHaveBeenCalled();
  });

  describe('when scene is connected', () => {
    beforeEach(() => {
      mockIsConnected.mockReturnValue(true);
    });

    it('sets isMicrophoneEnabled to the return value of scene.isMicrophoneActive', () => {
      const { result } = renderHook(() => useSMMedia(mockScene));
      expect(result.current.isMicrophoneEnabled).toEqual(false);
    });
  });

  describe('when toggleMicrophone is called', () => {
    beforeEach(() => {
      mockIsConnected.mockReturnValue(true);
    });

    it('sets isMicrophoneEnabled to the opposite value', async () => {
      const { result, rerender } = renderHook(() => useSMMedia(mockScene));

      expect(result.current.isMicrophoneEnabled).toEqual(false);

      await result.current.toggleMicrophone();
      rerender();

      expect(result.current.isMicrophoneEnabled).toEqual(true);
    });

    it('calls setMediaDeviceActive with microphone and the opposite boolean value', async () => {
      const { result } = renderHook(() => useSMMedia(mockScene));

      await result.current.toggleMicrophone();
      expect(mockSetMediaDeviceActive).toHaveBeenCalledWith({ microphone: true });

      await result.current.toggleMicrophone();

      expect(mockSetMediaDeviceActive).toHaveBeenCalledWith({ microphone: false });

      expect(mockSetMediaDeviceActive).toHaveBeenCalledTimes(2);
    });
  });
});

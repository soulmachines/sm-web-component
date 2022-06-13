import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useSMMedia } from '.';

const mockIsConnected = jest.fn(() => false);
const mockSetMediaDeviceActive = jest.fn();
const mockScene = {
  isConnected: mockIsConnected,
  setMediaDeviceActive: mockSetMediaDeviceActive,
  isMicrophoneActive: jest.fn(() => false),
  isCameraActive: jest.fn(() => false),
} as unknown as Scene;
jest.mock('@soulmachines/smwebsdk', () => ({
  Scene: jest.fn(() => mockScene),
}));

describe('useSMMedia()', () => {
  const customRender = () => renderHook(() => useSMMedia(mockScene));

  it('returns a toggleMicrophone function', () => {
    const { result } = customRender();
    expect(typeof result.current.toggleMicrophone).toEqual('function');
  });

  it('returns a toggleCamera function', () => {
    const { result } = customRender();
    expect(typeof result.current.toggleCamera).toEqual('function');
  });

  it('returns isMicrophoneEnabled defaulted to false', () => {
    const { result } = customRender();
    expect(result.current.isMicrophoneEnabled).toEqual(false);
  });

  it('returns isCameraEnabled defaulted to false', () => {
    const { result } = customRender();
    expect(result.current.isCameraEnabled).toEqual(false);
  });

  it('does not call setMediaDeviceActive', () => {
    customRender();
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

    it('sets isMicrophoneEnabled to the return value of scene.isMicrophoneActive', () => {
      const { result } = renderHook(() => useSMMedia(mockScene));
      expect(result.current.isCameraEnabled).toEqual(false);
    });
  });

  describe('when toggleMicrophone is called', () => {
    const customRender = () => renderHook(() => useSMMedia(mockScene));

    beforeEach(() => {
      mockIsConnected.mockReturnValue(true);
    });

    it('sets isMicrophoneEnabled to the opposite value', async () => {
      const { result, rerender } = customRender();

      expect(result.current.isMicrophoneEnabled).toEqual(false);

      await result.current.toggleMicrophone();
      rerender();

      expect(result.current.isMicrophoneEnabled).toEqual(true);
    });

    it('calls setMediaDeviceActive with microphone and the opposite boolean value', async () => {
      const { result } = customRender();

      await result.current.toggleMicrophone();
      expect(mockSetMediaDeviceActive).toHaveBeenCalledWith({ microphone: true });

      await result.current.toggleMicrophone();

      expect(mockSetMediaDeviceActive).toHaveBeenCalledWith({ microphone: false });

      expect(mockSetMediaDeviceActive).toHaveBeenCalledTimes(2);
    });
  });

  describe('when toggleCamera is called', () => {
    const customRender = () => renderHook(() => useSMMedia(mockScene));

    beforeEach(() => {
      mockIsConnected.mockReturnValue(true);
    });

    it('sets isCameraEnabled to the opposite value', async () => {
      const { result, rerender } = customRender();

      expect(result.current.isCameraEnabled).toEqual(false);

      await result.current.toggleCamera();
      rerender();

      expect(result.current.isCameraEnabled).toEqual(true);
    });

    it('calls setMediaDeviceActive with camera and the opposite boolean value', async () => {
      const { result } = customRender();

      await result.current.toggleCamera();
      expect(mockSetMediaDeviceActive).toHaveBeenCalledWith({ camera: true });

      await result.current.toggleCamera();

      expect(mockSetMediaDeviceActive).toHaveBeenCalledWith({ camera: false });

      expect(mockSetMediaDeviceActive).toHaveBeenCalledTimes(2);
    });
  });
});

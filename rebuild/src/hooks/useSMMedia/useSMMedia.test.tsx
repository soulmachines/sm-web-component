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
  videoElement: undefined,
} as unknown as Scene;
jest.mock('@soulmachines/smwebsdk', () => ({
  Scene: jest.fn(() => mockScene),
}));

describe('useSMMedia()', () => {
  const customRender = (scene = mockScene) => renderHook(() => useSMMedia(scene));

  it('returns a toggleMicrophone function', () => {
    const { result } = customRender();
    expect(typeof result.current.toggleMicrophone).toEqual('function');
  });

  it('returns a toggleCamera function', () => {
    const { result } = customRender();
    expect(typeof result.current.toggleCamera).toEqual('function');
  });

  it('returns a toggleVideoMuted function', () => {
    const { result } = customRender();
    expect(typeof result.current.toggleVideoMuted).toEqual('function');
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

  describe('isVideoMuted default state', () => {
    it('uses the videoElements muted state if present', () => {
      const scene = {
        ...mockScene,
        videoElement: { muted: true },
      } as unknown as Scene;
      const { result } = customRender(scene);
      expect(result.current.isVideoMuted).toEqual(true);
    });

    it('defaults to false when the video element is not present', () => {
      const { result } = customRender();
      expect(result.current.isVideoMuted).toEqual(false);
    });
  });

  describe('when scene is connected', () => {
    beforeEach(() => {
      mockIsConnected.mockReturnValue(true);
    });

    it('sets isMicrophoneEnabled to the return value of scene.isMicrophoneActive', () => {
      const { result } = customRender();
      expect(result.current.isMicrophoneEnabled).toEqual(false);
    });

    it('sets isCameraEnabled to the return value of scene.isCameraActive', () => {
      const { result } = customRender();
      expect(result.current.isCameraEnabled).toEqual(false);
    });
  });

  describe('when toggleVideoMuted is called', () => {
    it('sets isVideoMuted to the opposite value', async () => {
      const { result, rerender } = customRender();

      expect(result.current.isVideoMuted).toEqual(false);

      await result.current.toggleVideoMuted();
      rerender();

      expect(result.current.isVideoMuted).toEqual(true);
    });
  });

  describe('when toggleCamera is called', () => {
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

  describe('when toggleVideoMuted is called', () => {
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

import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { useSMMedia } from '.';
import { SessionDataKeys } from '../../enums';

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

  describe('when scene is disconnected', () => {
    beforeEach(() => {
      mockIsConnected.mockReturnValue(false);
    });

    it('defaults to false when the video element is not present', () => {
      const { result } = customRender();
      expect(result.current.isVideoMuted).toEqual(false);
    });
  });

  describe('when scene is connected', () => {
    beforeEach(() => {
      mockIsConnected.mockReturnValue(true);
      sessionStorage.removeItem(SessionDataKeys.videoMuted);
      sessionStorage.removeItem(SessionDataKeys.cameraEnabled);
      sessionStorage.removeItem(SessionDataKeys.microphoneEnabled);
    });

    it('sets isMicrophoneEnabled to the return value of scene.isMicrophoneActive', () => {
      const { result } = customRender();
      expect(result.current.isMicrophoneEnabled).toEqual(false);
    });

    it('sets isCameraEnabled to the return value of scene.isCameraActive', () => {
      const { result } = customRender();
      expect(result.current.isCameraEnabled).toEqual(false);
    });

    describe('isVideoMuted state', () => {
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

    describe('when toggleVideoMuted is called', () => {
      it('sets isVideoMuted to the opposite value', async () => {
        const { result } = customRender();

        expect(result.current.isVideoMuted).toEqual(false);

        await result.current.toggleVideoMuted();

        expect(result.current.isVideoMuted).toEqual(true);
      });
    });

    describe('when toggleCamera is called', () => {
      it('sets isCameraEnabled to the opposite value', async () => {
        const { result } = customRender();

        expect(result.current.isCameraEnabled).toEqual(false);

        await result.current.toggleCamera();

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

    describe('when toggleMicrophone is called', () => {
      it('sets isMicrophoneEnabled to the opposite value', async () => {
        const { result } = customRender();

        expect(result.current.isMicrophoneEnabled).toEqual(false);

        await result.current.toggleMicrophone();

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

    describe('when control states are saved in session storage', () => {
      beforeEach(() => {
        sessionStorage.setItem(SessionDataKeys.cameraEnabled, 'true');
        sessionStorage.setItem(SessionDataKeys.microphoneEnabled, 'false');
        sessionStorage.setItem(SessionDataKeys.videoMuted, 'true');
      });

      it('calls setMediaDeviceActive with camera and microphone values when it is true in session storage', () => {
        customRender();
        expect(mockSetMediaDeviceActive).toHaveBeenCalledWith({
          camera: sessionStorage.getItem(SessionDataKeys.cameraEnabled) === 'true',
        });
        expect(mockSetMediaDeviceActive).toHaveBeenCalledTimes(1);
      });

      it('mutes scene video when previous video status is muted in session storage', () => {
        customRender();
        expect(mockScene.videoElement?.muted).toEqual(true);
      });
    });
  });
});

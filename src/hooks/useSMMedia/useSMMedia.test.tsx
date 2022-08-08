import { Scene } from '@soulmachines/smwebsdk';
import { renderHook } from '@testing-library/react-hooks';
import { MutableRef } from 'preact/hooks';
import { useSMMedia } from '.';
import { SessionDataKeys } from '../../enums';

jest.mock('@soulmachines/smwebsdk');

describe('useSMMedia()', () => {
  const mockScene = new Scene();
  const mockVideoRef = {
    current: { muted: true, mock: 124 },
  } as unknown as MutableRef<HTMLVideoElement | null>;
  const customRender = (scene = mockScene, canAutoPlayAudio = true, videoRef = mockVideoRef) =>
    renderHook(() => useSMMedia({ scene, canAutoPlayAudio, videoRef }));

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

  describe('when scene is connected', () => {
    beforeEach(() => {
      mockScene.isConnected = () => true;
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

    it('sets isVideoMuted to true when canAutoPlayAudio is false', () => {
      const { result } = customRender(mockScene, false);
      expect(result.current.isVideoMuted).toEqual(true);
    });

    it('sets isVideoMuted to false when canAutoPlayAudio is true', () => {
      const { result } = customRender(mockScene, true);
      expect(result.current.isVideoMuted).toEqual(false);
    });

    it('sets isMicrophoneEnabled and isCameraEnabled to false when disconnected', async () => {
      const { result, rerender } = customRender();

      await result.current.toggleMicrophone();
      await result.current.toggleCamera();

      expect(result.current.isMicrophoneEnabled).toEqual(true);
      expect(result.current.isCameraEnabled).toEqual(true);

      mockScene.isConnected = () => false;

      rerender();

      expect(result.current.isMicrophoneEnabled).toEqual(false);
      expect(result.current.isCameraEnabled).toEqual(false);
    });

    it('does not save the mute status in storage', () => {
      expect(Object.keys(sessionStorage)).toEqual([]);
    });

    describe('when toggleVideoMuted is called', () => {
      it('sets changes the video muted status to the opposite value', async () => {
        const { result } = customRender();

        expect(mockVideoRef.current?.muted).toEqual(false);

        await result.current.toggleVideoMuted();

        expect(mockVideoRef.current?.muted).toEqual(true);
      });

      it('sets isVideoMuted to the opposite value', async () => {
        const { result } = customRender();

        expect(result.current.isVideoMuted).toEqual(false);

        await result.current.toggleVideoMuted();

        expect(result.current.isVideoMuted).toEqual(true);
      });

      it('saves the mute status in storage', async () => {
        const { result } = customRender();

        await result.current.toggleVideoMuted();

        expect(sessionStorage.getItem(SessionDataKeys.videoMuted)).toEqual('true');
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
        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledWith({ camera: true });

        await result.current.toggleCamera();

        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledWith({ camera: false });

        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledTimes(2);
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
        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledWith({ microphone: true });

        await result.current.toggleMicrophone();

        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledWith({ microphone: false });

        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledTimes(2);
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
        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledWith({
          camera: sessionStorage.getItem(SessionDataKeys.cameraEnabled) === 'true',
        });
        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledTimes(1);
      });

      it('sets the video muted state to the saved muted state in session storage', () => {
        const { result } = customRender();
        expect(result.current.isVideoMuted).toEqual(true);
      });
    });
  });
});

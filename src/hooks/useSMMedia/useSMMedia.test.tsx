import { Scene } from '@soulmachines/smwebsdk';
import { act, renderHook } from '@testing-library/react-hooks';
import { MutableRef } from 'preact/hooks';
import { useSMMedia } from '.';
import { SessionDataKeys } from '../../enums';

describe('useSMMedia()', () => {
  const mockPlay = jest.fn();
  const mockScene = new Scene();
  const mockVideoRef = {
    current: { muted: true, mock: 124, srcObject: null, play: mockPlay },
  } as unknown as MutableRef<HTMLVideoElement | null>;

  const mockCameraRef = {
    current: { muted: true, mock: 124, srcObject: null, play: mockPlay },
  } as unknown as MutableRef<HTMLVideoElement | null>;

  const customRender = (scene = mockScene, videoRef = mockVideoRef, camRef = mockCameraRef) =>
    renderHook(() => useSMMedia({ scene, videoRef, camRef }));

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

    it('sets isMicrophoneEnabled and isCameraEnabled to false when disconnected', async () => {
      const { result, rerender } = customRender();

      await act(async () => {
        result.current.toggleMicrophone();
        result.current.toggleCamera();
      });

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
      it('sets changes the isVideoMuted status to the opposite value', async () => {
        const { result } = customRender();

        expect(mockVideoRef.current?.muted).toEqual(true);

        act(() => {
          result.current.toggleVideoMuted();
        });

        await expect(mockVideoRef.current?.muted).toEqual(false);

        await act(async () => {
          result.current.toggleVideoMuted();
        });

        expect(result.current.isVideoMuted).toEqual(true);
      });

      it('saves the mute status in storage', async () => {
        const { result } = customRender();

        await act(async () => {
          result.current.toggleVideoMuted();
        });

        expect(sessionStorage.getItem(SessionDataKeys.videoMuted)).toEqual('false');
      });
    });

    describe('when toggleCamera is called', () => {
      it('sets isCameraEnabled to the opposite value', async () => {
        const { result } = customRender();

        expect(result.current.isCameraEnabled).toEqual(false);

        await act(async () => {
          result.current.toggleCamera();
        });

        expect(result.current.isCameraEnabled).toEqual(true);
      });

      it('calls setMediaDeviceActive with camera and the opposite boolean value', async () => {
        const { result } = customRender();

        await act(async () => {
          result.current.toggleCamera();
        });
        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledWith({ camera: true });

        await act(async () => {
          result.current.toggleCamera();
        });
        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledWith({ camera: false });
        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledTimes(2);
      });
    });

    describe('when toggleMicrophone is called', () => {
      it('sets isMicrophoneEnabled to the opposite value', async () => {
        const { result } = customRender();

        expect(result.current.isMicrophoneEnabled).toEqual(false);

        await act(async () => {
          result.current.toggleMicrophone();
        });
        expect(result.current.isMicrophoneEnabled).toEqual(true);
      });

      it('calls setMediaDeviceActive with microphone and the opposite boolean value', async () => {
        const { result } = customRender();

        await act(async () => {
          result.current.toggleMicrophone();
        });
        expect(mockScene.setMediaDeviceActive).toHaveBeenCalledWith({ microphone: true });

        await act(async () => {
          result.current.toggleMicrophone();
        });
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

  describe('playVideo', () => {
    describe('when theres no video ref', () => {
      it('does not store the mute state', async () => {
        const sessionStorageSpy = jest.spyOn(Storage.prototype, 'setItem');
        const videoRef = { current: null };
        const { result } = customRender(mockScene, videoRef);

        result.current.playVideo();

        expect(sessionStorageSpy).not.toHaveBeenCalledWith('sm-video-muted', expect.any(String));
      });

      it('does not call sessionStorage setItem', () => {
        const videoRef = { current: null };
        const { result } = customRender(mockScene, videoRef);

        result.current.playVideo();

        expect(mockVideoRef.current?.play).not.toHaveBeenCalled();
      });
    });

    describe('when theres no video stream', () => {
      it('does not call sessionStorage setItem', () => {
        const scene = { ...mockScene, videoElement: null } as unknown as Scene;
        const sessionStorageSpy = jest.spyOn(Storage.prototype, 'setItem');
        const { result } = customRender(scene);

        result.current.playVideo();

        expect(sessionStorageSpy).not.toHaveBeenCalledWith('sm-video-muted', expect.any(String));
      });

      it('does not call play on the video', () => {
        const scene = { ...mockScene, videoElement: null } as unknown as Scene;
        const { result } = customRender(scene);

        result.current.playVideo();

        expect(mockVideoRef.current?.play).not.toHaveBeenCalled();
      });
    });

    describe('when theres is a video ref and video stream', () => {
      beforeEach(() => {
        mockPlay.mockResolvedValue('play');
      });

      it('attaches the video stream to the video ref', () => {
        const { result } = customRender();

        result.current.playVideo();

        expect(mockVideoRef.current?.srcObject).toEqual('mock video src');
      });

      it('calls play on the video', () => {
        const { result } = customRender();

        result.current.playVideo();

        expect(mockVideoRef.current?.play).toHaveBeenCalled();
      });

      describe('when play is successful', () => {
        describe('when video muted true is stored in session storage', () => {
          beforeEach(() => {
            window.sessionStorage.setItem('sm-video-muted', 'true');
          });

          it('sets the video muted attribute to false', async () => {
            const { result } = customRender();

            await result.current.playVideo();

            expect(mockVideoRef.current?.muted).toEqual(true);
          });

          it('does not store the mute state', async () => {
            const scene = { ...mockScene, videoElement: null } as unknown as Scene;
            const sessionStorageSpy = jest.spyOn(Storage.prototype, 'setItem');
            const { result } = customRender(scene);

            // Clear mock as is called in setup
            sessionStorageSpy.mockClear();

            await result.current.playVideo();

            expect(sessionStorageSpy).not.toHaveBeenCalledWith(
              'sm-video-muted',
              expect.any(String),
            );
          });
        });

        describe('when video muted false is stored in session storage', () => {
          beforeEach(() => {
            window.sessionStorage.setItem('sm-video-muted', 'false');
          });

          it('sets the video muted attribute to false', async () => {
            const { result } = customRender();

            await result.current.playVideo();

            expect(mockVideoRef.current?.muted).toEqual(false);
          });

          it('does not store the mute state', async () => {
            const scene = { ...mockScene, videoElement: null } as unknown as Scene;
            const sessionStorageSpy = jest.spyOn(Storage.prototype, 'setItem');
            const { result } = customRender(scene);

            // Clear mock as is called in setup
            sessionStorageSpy.mockClear();

            await result.current.playVideo();

            expect(sessionStorageSpy).not.toHaveBeenCalledWith(
              'sm-video-muted',
              expect.any(String),
            );
          });
        });

        describe('when video muted is not stored in session storage', () => {
          it('sets the video muted attribute to false', async () => {
            const { result } = customRender();

            await result.current.playVideo();

            expect(mockVideoRef.current?.muted).toEqual(false);
          });

          it('does not store the mute state', async () => {
            const scene = { ...mockScene, videoElement: null } as unknown as Scene;
            const sessionStorageSpy = jest.spyOn(Storage.prototype, 'setItem');
            const { result } = customRender(scene);

            await result.current.playVideo();

            expect(sessionStorageSpy).not.toHaveBeenCalledWith(
              'sm-video-muted',
              expect.any(String),
            );
          });
        });
      });

      describe('when play errors', () => {
        beforeEach(() => {
          mockPlay.mockRejectedValue('Boom');
        });

        it('sets the video muted attribute to true', async () => {
          const { result } = customRender();

          await result.current.playVideo();

          expect(mockVideoRef.current?.muted).toEqual(true);
        });

        it('does not call sessionStorage getItem', async () => {
          const scene = { ...mockScene, videoElement: null } as unknown as Scene;
          const sessionStorageSpy = jest.spyOn(Storage.prototype, 'getItem');
          const { result } = customRender(scene);

          // Clear mock as is called in setup
          sessionStorageSpy.mockClear();

          await result.current.playVideo();

          expect(sessionStorageSpy).not.toHaveBeenCalled();
        });

        it('does not store the mute state', async () => {
          const scene = { ...mockScene, videoElement: null } as unknown as Scene;
          const sessionStorageSpy = jest.spyOn(Storage.prototype, 'setItem');
          const { result } = customRender(scene);

          await result.current.playVideo();

          expect(sessionStorageSpy).not.toHaveBeenCalledWith('sm-video-muted', expect.any(String));
        });
      });
    });
  });
});

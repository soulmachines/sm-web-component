import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoComponent } from './video.component';
import { SMWebSDKService } from '../services/smwebsdk.service';
import { of, throwError } from 'rxjs';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <app-video></app-video> `,
})
class TestComponent {
  @ViewChild(VideoComponent, { static: false }) child: VideoComponent;
}

describe('VideoComponent', () => {
  const mockSMWebSdkService = {
    connected: false,
    initialise: () => undefined,
    connect: (_: string) => of(''),
    disconnect: () => undefined,
    registerEventCallbacks: () => undefined,
    unregisterEventCallbacks: () => undefined,
    sendVideoBounds: () => undefined,
    persona: {
      conversationSend: (_1: string, _2: any, _3: any) => Promise.resolve(),
      stopSpeaking: () => Promise.resolve(),
    },
    scene: {
      startRecognize: () => Promise.resolve(),
      stopRecognize: () => Promise.resolve(),
    },
  };
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  function createComponent(webSdkServiceProvider: any = mockSMWebSdkService) {
    TestBed.configureTestingModule({
      declarations: [TestComponent, VideoComponent],
    }).compileComponents();

    // override provider here as it doesn't work in configureTestingModule due
    // to not being provided in root
    TestBed.overrideComponent(VideoComponent, {
      set: {
        providers: [{ provide: SMWebSDKService, useValue: webSdkServiceProvider }],
      },
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }

  it('should create', () => {
    createComponent();
    fixture.detectChanges();

    expect(component.child).toBeTruthy();
  });

  describe('connect', () => {
    let onConnectionSuccessSpy, onConnectionErrorSpy;

    beforeEach(() => {
      createComponent();
      fixture.detectChanges();

      onConnectionSuccessSpy = spyOn<any>(component.child, 'onConnectionSuccess');
      onConnectionErrorSpy = spyOn<any>(component.child, 'onConnectionError');
    });

    describe('when connection is successful', () => {
      beforeEach(() => {
        component.child['connect']();
      });

      it('should call onConnectionSuccess', () => {
        expect(onConnectionSuccessSpy).toHaveBeenCalled();
      });

      it('should not call onConnectionError ', () => {
        expect(onConnectionErrorSpy).not.toHaveBeenCalled();
      });
    });

    describe('when connection is unsuccessful', () => {
      beforeEach(() => {
        spyOn(mockSMWebSdkService, 'connect').and.returnValue(throwError(null));
        component.child['connect']();
      });

      it('should call onConnectionError', () => {
        expect(onConnectionErrorSpy).toHaveBeenCalled();
      });

      it('should not call onConnectionSuccess', () => {
        expect(onConnectionSuccessSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('inputs', () => {
    beforeEach(() => {
      createComponent();
    });

    describe('tokenserver', () => {
      it('should be passed as a parameter to connect(..) in the WebSDK when a connection is started', () => {
        const connectSpy = spyOn(mockSMWebSdkService, 'connect').and.callThrough();

        component.child.tokenserver = 'test-token-server';
        fixture.detectChanges();

        component.child['connect']();
        expect(connectSpy).toHaveBeenCalledOnceWith('test-token-server');
      });
    });

    describe('autoconnect', () => {
      it('should default to false', () => {
        fixture.detectChanges();
        expect(component.child.autoconnect).toBeFalse();
      });

      it('when true should call connect in the WebSDK when the component is initialised', () => {
        const connectSpy = spyOn(mockSMWebSdkService, 'connect').and.callThrough();
        component.child.autoconnect = true;
        fixture.detectChanges();
        expect(connectSpy).toHaveBeenCalled();
      });

      it('when false should not call connect in the WebSDK when the component is initialised', () => {
        const connectSpy = spyOn(mockSMWebSdkService, 'connect').and.callThrough();
        component.child.autoconnect = false;
        fixture.detectChanges();
        expect(connectSpy).not.toHaveBeenCalled();
      });
    });

    describe('microphoneEnabled', () => {
      it('when true should result in a call to startRecognize() in the WebSDK when a connection is successful', () => {
        const startRecognizeSpy = spyOn(mockSMWebSdkService.scene, 'startRecognize');
        mockSMWebSdkService.connected = true;

        component.child.microphoneEnabled = 'true'; // TODO this takes a string and autoconnect takes a boolean
        fixture.detectChanges();

        component.child['onConnectionSuccess']();
        expect(startRecognizeSpy).toHaveBeenCalled();
      });

      it('when false should result in a call to stopRecognize() in the WebSDK when a connection is successful', () => {
        const stopRecognizeSpy = spyOn(mockSMWebSdkService.scene, 'stopRecognize');
        mockSMWebSdkService.connected = true;

        component.child.microphoneEnabled = 'false'; // TODO this takes a string and autoconnect takes a boolean
        fixture.detectChanges();

        component.child['onConnectionSuccess']();
        expect(stopRecognizeSpy).toHaveBeenCalled();
      });
    });
  });

  describe('public methods', () => {
    const getVideoNativeElement = () =>
      fixture.debugElement.query(By.css('app-video')).nativeElement;

    it('persona should return the persona from the WebSDK', () => {
      const sdkService = { ...mockSMWebSdkService, persona: 'mock persona', connected: true };
      createComponent(sdkService);
      fixture.detectChanges();

      const persona = getVideoNativeElement().persona();
      expect(persona).toBe('mock persona');
    });

    it('scene should return the scene from the WebSDK', () => {
      const sdkService = { ...mockSMWebSdkService, scene: 'mock scene', connected: true };
      createComponent(sdkService);
      fixture.detectChanges();

      const persona = getVideoNativeElement().scene();
      expect(persona).toBe('mock scene');
    });

    // TODO - could break this down so it only checks if component.connect() was called
    // then test disconnect separately (as it does other things)
    it('connect should result in a call to connect in the WebSDK', () => {
      createComponent();
      fixture.detectChanges();

      const connectSpy = spyOn(mockSMWebSdkService, 'connect').and.callThrough();
      getVideoNativeElement().connect();
      expect(connectSpy).toHaveBeenCalled();
    });

    // TODO - could break this down so it only checks if component.disconnect() was called
    // then test disconnect separately (as it does other things)
    it('disconnect should result in a call to disconnect in the WebSDK', () => {
      const sdkService = { ...mockSMWebSdkService, connected: true };
      createComponent(sdkService);
      fixture.detectChanges();

      const disconnectSpy = spyOn(sdkService, 'disconnect').and.callThrough();
      getVideoNativeElement().disconnect();
      expect(disconnectSpy).toHaveBeenCalled();
    });

    it('sendTextMessage should result in a call to persona.conversationSend in the WebSDK', () => {
      const sdkService = { ...mockSMWebSdkService, connected: true };
      createComponent(sdkService);
      fixture.detectChanges();

      const conversationSendSpy = spyOn(sdkService.persona, 'conversationSend');
      getVideoNativeElement().sendTextMessage('test');
      expect(conversationSendSpy).toHaveBeenCalledWith('test', {}, {});
    });

    describe('setMicrophoneEnabled', () => {
      const sdkService = { ...mockSMWebSdkService, connected: true };

      beforeEach(() => {
        createComponent(sdkService);
        fixture.detectChanges();
      });

      it('when true should result in a call to scene.startRecognize in the WebSDK', () => {
        const startRecognizeSpy = spyOn(sdkService.scene, 'startRecognize');
        getVideoNativeElement().setMicrophoneEnabled(true);
        expect(startRecognizeSpy).toHaveBeenCalled();
      });

      it('when false should result in a call to scene.stopRecognize in the WebSDK', () => {
        const stopRecognizeSpy = spyOn(sdkService.scene, 'stopRecognize');
        getVideoNativeElement().setMicrophoneEnabled(false);
        expect(stopRecognizeSpy).toHaveBeenCalled();
      });
    });

    it('stopSpeaking should result in a call to persona.stopSpeaking in the WebSDK', () => {
      const sdkService = { ...mockSMWebSdkService, connected: true };
      createComponent(sdkService);
      fixture.detectChanges();

      const stopSpeakingSpy = spyOn(sdkService.persona, 'stopSpeaking');
      getVideoNativeElement().stopSpeaking();
      expect(stopSpeakingSpy).toHaveBeenCalled();
    });
  });
});

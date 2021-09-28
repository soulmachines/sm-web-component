import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoComponent } from './video.component';
import { SMWebSDKService } from '../services/smwebsdk.service';
import { of, throwError } from 'rxjs';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { take, tap } from 'rxjs/operators';
import { SpinnerModule } from '../spinner/spinner.module';

@Component({
  template: ` <app-video></app-video> `,
})
class TestComponent {
  @ViewChild(VideoComponent, { static: true }) child: VideoComponent;
}

describe('VideoComponent', () => {
  // suppress console.logs as they generate a lot of noise
  // could use debug="true" when we do all logging via our own log method
  console.log = jest.fn();

  const mockSMWebSdkService = {
    connected: false,
    initialise: jest.fn(() => undefined),
    connect: jest.fn((_: string) => of('')),
    disconnect: jest.fn(() => undefined),
    registerEventCallbacks: jest.fn(() => undefined),
    unregisterEventCallbacks: jest.fn(() => undefined),
    sendVideoBounds: jest.fn(() => undefined),
    persona: {
      conversationSend: jest.fn((_1: string, _2: any, _3: any) => Promise.resolve()),
      stopSpeaking: jest.fn(() => Promise.resolve()),
    },
    scene: {
      startRecognize: jest.fn(() => Promise.resolve()),
      stopRecognize: jest.fn(() => Promise.resolve()),
    },
  };
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  function createComponent(webSdkServiceProvider: any = { ...mockSMWebSdkService }) {
    TestBed.configureTestingModule({
      declarations: [TestComponent, VideoComponent],
      imports: [SpinnerModule],
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

      onConnectionSuccessSpy = jest.spyOn(component.child as any, 'onConnectionSuccess');
      onConnectionErrorSpy = jest.spyOn(component.child as any, 'onConnectionError');
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
        mockSMWebSdkService.connect.mockImplementation(() => throwError(null));
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
    describe('tokenServer', () => {
      it('should be passed as a parameter to connect(..) in the WebSDK when a connection is started', () => {
        createComponent();
        component.child.tokenServer = 'test-token-server';
        fixture.detectChanges();

        component.child['connect']();
        expect(mockSMWebSdkService.connect).toHaveBeenNthCalledWith(1, 'test-token-server');
      });
    });

    describe('autoConnect', () => {
      beforeEach(() => {
        createComponent();
      });

      it('should default to true', () => {
        fixture.detectChanges();
        expect(component.child.autoConnect).toBe('true');
      });

      it('when true should call connect in the WebSDK when the component is initialised', () => {
        component.child.autoConnect = 'true';
        fixture.detectChanges();
        expect(mockSMWebSdkService.connect).toHaveBeenCalled();
      });

      it('when false should not call connect in the WebSDK when the component is initialised', () => {
        component.child.autoConnect = 'false';
        fixture.detectChanges();
        expect(mockSMWebSdkService.connect).not.toHaveBeenCalled();
      });
    });

    describe('microphoneEnabled', () => {
      beforeEach(() => {
        const sdkService = { ...mockSMWebSdkService, connected: true };
        createComponent(sdkService);
      });

      it('when true should result in a call to startRecognize() in the WebSDK when a connection is successful', () => {
        component.child.microphoneEnabled = 'true';
        fixture.detectChanges();

        component.child['onConnectionSuccess']();
        expect(mockSMWebSdkService.scene.startRecognize).toHaveBeenCalled();
      });

      it('when false should result in a call to stopRecognize() in the WebSDK when a connection is successful', () => {
        component.child.microphoneEnabled = 'false';
        fixture.detectChanges();

        component.child['onConnectionSuccess']();
        expect(mockSMWebSdkService.scene.stopRecognize).toHaveBeenCalled();
      });
    });
  });

  describe('public methods', () => {
    const getVideoNativeElement = () =>
      fixture.debugElement.query(By.css('app-video')).nativeElement;

    it('persona should return the persona from the WebSDK', () => {
      const sdkService = {
        ...mockSMWebSdkService,
        persona: { ...mockSMWebSdkService.persona, testId: 'mock persona' },
        connected: true,
      };
      createComponent(sdkService);
      fixture.detectChanges();

      const persona = getVideoNativeElement().persona();
      expect(persona.testId).toBe('mock persona');
    });

    it('scene should return the scene from the WebSDK', () => {
      const sdkService = {
        ...mockSMWebSdkService,
        scene: { ...mockSMWebSdkService.scene, testId: 'mock scene' },
        connected: true,
      };
      createComponent(sdkService);
      fixture.detectChanges();

      const scene = getVideoNativeElement().scene();
      expect(scene.testId).toBe('mock scene');
    });

    // TODO - could break this down so it only checks if component.connect() was called
    // then test disconnect separately (as it does other things)
    it('connect should result in a call to connect in the WebSDK', () => {
      createComponent();
      fixture.detectChanges();

      getVideoNativeElement().connect();
      expect(mockSMWebSdkService.connect).toHaveBeenCalled();
    });

    // TODO - could break this down so it only checks if component.disconnect() was called
    // then test disconnect separately (as it does other things)
    it('disconnect should result in a call to disconnect in the WebSDK', () => {
      const sdkService = { ...mockSMWebSdkService, connected: true };
      createComponent(sdkService);
      fixture.detectChanges();

      getVideoNativeElement().disconnect();
      expect(mockSMWebSdkService.disconnect).toHaveBeenCalled();
    });

    it('sendTextMessage should result in a call to persona.conversationSend in the WebSDK', () => {
      const sdkService = { ...mockSMWebSdkService, connected: true };
      createComponent(sdkService);
      fixture.detectChanges();

      getVideoNativeElement().sendTextMessage('test');
      expect(mockSMWebSdkService.persona.conversationSend).toHaveBeenCalledWith('test', {}, {});
    });

    describe('setMicrophoneEnabled', () => {
      beforeEach(() => {
        const sdkService = { ...mockSMWebSdkService, connected: true };
        createComponent(sdkService);
        fixture.detectChanges();
      });

      it('when true should result in a call to scene.startRecognize in the WebSDK', () => {
        getVideoNativeElement().setMicrophoneEnabled(true);
        expect(mockSMWebSdkService.scene.startRecognize).toHaveBeenCalled();
      });

      it('when false should result in a call to scene.stopRecognize in the WebSDK', () => {
        getVideoNativeElement().setMicrophoneEnabled(false);
        expect(mockSMWebSdkService.scene.stopRecognize).toHaveBeenCalled();
      });
    });

    it('stopSpeaking should result in a call to persona.stopSpeaking in the WebSDK', () => {
      const sdkService = { ...mockSMWebSdkService, connected: true };
      createComponent(sdkService);
      fixture.detectChanges();

      getVideoNativeElement().stopSpeaking();
      expect(mockSMWebSdkService.persona.stopSpeaking).toHaveBeenCalled();
    });
  });

  describe('outputs', () => {
    beforeEach(() => {
      createComponent();
      fixture.detectChanges();
    });

    it('should raise connected event when onConnectionSuccess is called', () => {
      const connectedEmitSpy = jest.spyOn(component.child.connected, 'emit');
      component.child['onConnectionSuccess']();
      expect(connectedEmitSpy).toHaveBeenCalled();
    });

    it('should raise disconnected event when disconnect is called', () => {
      const disconnectedEmitSpy = jest.spyOn(component.child.disconnected, 'emit');
      component.child['disconnect']();
      expect(disconnectedEmitSpy).toHaveBeenCalled();
    });

    it('should raise userSpoke event when onConversationResult is called', () => {
      const userSpokeEmitSpy = jest.spyOn(component.child.userSpoke, 'emit');
      const data = { input: { text: 'input text' }, output: { text: 'output text' } };
      component.child['onConversationResult'](null, data);
      expect(userSpokeEmitSpy).toHaveBeenCalledWith('input text');
    });

    it('should raise dpSpoke event when onConversationResult is called', () => {
      const dpSpokeEmitSpy = jest.spyOn(component.child.dpSpoke, 'emit');
      const data = { input: { text: 'input text' }, output: { text: 'output text' } };
      component.child['onConversationResult'](null, data);
      expect(dpSpokeEmitSpy).toHaveBeenCalledWith('output text');
    });

    it('should raise speechMarker event when onSpeechMarker is called', () => {
      const speechMarkerEmitSpy = jest.spyOn(component.child.speechMarker, 'emit');
      const data = { name: 'data name', arguments: ['arg1', 'arg2'] };
      component.child['onSpeechMarker'](null, data);
      expect(speechMarkerEmitSpy).toHaveBeenCalledWith(data);
    });
  });

  describe('connectingSubject', () => {
    let connectingSubjectSpy;

    beforeEach(() => {
      createComponent();
      fixture.detectChanges();
    });

    it('should default to false', (done) => {
      component.child.connectingSubject
        .pipe(
          take(1),
          tap((value) => {
            expect(value).toBe(false);
            done();
          }),
        )
        .subscribe();
    });

    describe('emitter', () => {
      beforeEach(() => {
        connectingSubjectSpy = jest
          .spyOn(component.child.connectingSubject, 'next')
          .mockImplementation(() => {});
      });

      it('should emit true when the connection is initialised', () => {
        component.child['connect']();
        expect(connectingSubjectSpy).toHaveBeenCalledWith(true);
      });

      it('should emit false when the connection is successful', () => {
        component.child['onConnectionSuccess']();
        expect(connectingSubjectSpy).toHaveBeenCalledWith(false);
      });

      it('should emit false when the connection errors', () => {
        component.child['onConnectionError']('error');
        expect(connectingSubjectSpy).toHaveBeenCalledWith(false);
      });
    });
  });

  describe('connecting indicator slot', () => {
    beforeEach(() => {
      createComponent();
      fixture.detectChanges();
    });

    [
      { subjectValue: true, slotVisibility: true, slotVisibilityText: 'shown' },
      { subjectValue: false, slotVisibility: false, slotVisibilityText: 'hidden' },
    ].forEach(({ subjectValue, slotVisibility, slotVisibilityText }) =>
      it(`should be ${slotVisibilityText} when connectingSubject is ${subjectValue}`, () => {
        component.child.connectingSubject.next(subjectValue);
        fixture.detectChanges();

        const videoElement = fixture.debugElement.query(By.css('app-video'));
        const shadowRoot: DocumentFragment = videoElement.nativeElement.shadowRoot;
        const slotElement = shadowRoot.querySelector('slot');

        expect(Boolean(slotElement)).toBe(slotVisibility);
      }),
    );
  });
});

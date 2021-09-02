import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoComponent } from './video.component';
import { SMWebSDKService } from '../services/smwebsdk.service';
import { of, throwError } from 'rxjs';

describe('VideoComponent', () => {
  const mockSMWebSdkService = {
    connected: false,
    initialise: () => undefined,
    connect: (_: string) => of(''),
    registerEventCallbacks: () => undefined,
    sendVideoBounds: () => undefined,
    scene: {
      startRecognize: () => Promise.resolve(),
      stopRecognize: () => Promise.resolve(),
    },
  };
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoComponent],
    }).compileComponents();

    // override provider here as it doesn't work in configureTestingModule due
    // to not being provided in root
    TestBed.overrideComponent(VideoComponent, {
      set: {
        providers: [{ provide: SMWebSDKService, useValue: mockSMWebSdkService }],
      },
    });

    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('connect', () => {
    let onConnectionSuccessSpy, onConnectionErrorSpy;

    beforeEach(() => {
      onConnectionSuccessSpy = spyOn<any>(component, 'onConnectionSuccess');
      onConnectionErrorSpy = spyOn<any>(component, 'onConnectionError');
      fixture.detectChanges();
    });

    describe('when connection is successful', () => {
      beforeEach(() => {
        component.connect();
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
        component.connect();
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
    describe('tokenserver', () => {
      it('should be passed as a parameter to connect(..) in the WebSDK when a connection is started', () => {
        const connectSpy = spyOn(mockSMWebSdkService, 'connect').and.callThrough();

        component.tokenserver = 'test-token-server';
        fixture.detectChanges();

        component.connect();
        expect(connectSpy).toHaveBeenCalledOnceWith('test-token-server');
      });
    });

    describe('autoconnect', () => {
      it('should default to false', () => {
        fixture.detectChanges();
        expect(component.autoconnect).toBeFalse();
      });

      it('when true should call connect in the WebSDK when the component is initialised', () => {
        const connectSpy = spyOn(mockSMWebSdkService, 'connect').and.callThrough();
        component.autoconnect = true;
        fixture.detectChanges();
        expect(connectSpy).toHaveBeenCalled();
      });

      it('when false should not call connect in the WebSDK when the component is initialised', () => {
        const connectSpy = spyOn(mockSMWebSdkService, 'connect').and.callThrough();
        component.autoconnect = false;
        fixture.detectChanges();
        expect(connectSpy).not.toHaveBeenCalled();
      });
    });

    describe('microphoneEnabled', () => {
      it('when true should result in a call to startRecognize() in the WebSDK when a connection is successful', () => {
        const startRecognizeSpy = spyOn(mockSMWebSdkService.scene, 'startRecognize');
        mockSMWebSdkService.connected = true;

        component.microphoneEnabled = 'true'; // TODO this takes a string and autoconnect takes a boolean
        fixture.detectChanges();

        component['onConnectionSuccess']();
        expect(startRecognizeSpy).toHaveBeenCalled();
      });

      it('when false should result in a call to stopRecognize() in the WebSDK when a connection is successful', () => {
        const stopRecognizeSpy = spyOn(mockSMWebSdkService.scene, 'stopRecognize');
        mockSMWebSdkService.connected = true;

        component.microphoneEnabled = 'false'; // TODO this takes a string and autoconnect takes a boolean
        fixture.detectChanges();

        component['onConnectionSuccess']();
        expect(stopRecognizeSpy).toHaveBeenCalled();
      });
    });
  });
});

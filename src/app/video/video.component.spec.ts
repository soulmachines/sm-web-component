import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoComponent } from './video.component';
import { SMWebSDKService } from '../services/smwebsdk.service';
import { of } from 'rxjs';

describe('VideoComponent', () => {
  let mockSMWebSdkService;
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    mockSMWebSdkService = jasmine.createSpyObj<SMWebSDKService>('SMWebSDKService', {
      initialise: undefined,
      connect: of(''),
    });

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

  describe('inputs', () => {
    describe('autoconnect', () => {
      it('should call connect on the WebSDK when true and component is initialised', () => {
        component.autoconnect = true;
        fixture.detectChanges();
        expect(mockSMWebSdkService.connect).toHaveBeenCalled();
      });

      it('should not call connect on the WebSDK when false and component is initialised', () => {
        component.autoconnect = false;
        fixture.detectChanges();
        expect(mockSMWebSdkService.connect).not.toHaveBeenCalled();
      });
    });
  });
});

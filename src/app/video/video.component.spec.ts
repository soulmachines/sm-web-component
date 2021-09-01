import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VideoComponent } from './video.component';
import { SMWebSDKService } from '../services/smwebsdk.service';
import { of } from 'rxjs';

describe('VideoComponent', () => {
  let mockSMWebSdkService;
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    mockSMWebSdkService = jasmine.createSpyObj<SMWebSDKService>('SMWebSDKService', {
      initialise: null,
      connect: of(''),
    });
    mockSMWebSdkService.connect.and.returnValue(of(''));

    await TestBed.configureTestingModule({
      declarations: [VideoComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

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

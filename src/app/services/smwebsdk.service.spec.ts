import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Persona, Scene } from '@soulmachines/smwebsdk';
import { SMWebSDKService } from './smwebsdk.service';

describe('SMWebSDKService', () => {
  let smWebSDKService: SMWebSDKService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const videoElementSpy = document.createElement('video') as HTMLVideoElement;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [SMWebSDKService, { provide: HttpClient, useValue: httpClientSpy }],
    });

    smWebSDKService = TestBed.inject(SMWebSDKService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(smWebSDKService).toBeTruthy();
  });

  describe('initialise', () => {
    it('should create scene and persona', () => {
      smWebSDKService.initialise(videoElementSpy);
      expect(smWebSDKService.scene).toBeInstanceOf(Scene);
      expect(smWebSDKService.persona).toBeInstanceOf(Persona);
    });
  });
});

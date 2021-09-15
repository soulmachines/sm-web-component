import { SMWebSDKService } from './smwebsdk.service';

describe('SMWebSDKService', () => {
  let service: SMWebSDKService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SMWebSDKService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

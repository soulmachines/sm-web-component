import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SMWebSDKService } from './smwebsdk.service';

describe('SMWebSDKService', () => {
  let smwebsdkService: SMWebSDKService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [SMWebSDKService, { provide: HttpClient, useValue: httpClientSpy }],
    });

    smwebsdkService = TestBed.inject(SMWebSDKService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(smwebsdkService).toBeTruthy();
  });
});

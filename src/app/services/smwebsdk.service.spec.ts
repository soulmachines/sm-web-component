import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SMWebSDKService } from './smwebsdk.service';

describe('SMWebSDKService', () => {
  const mockHttpClient = {
    get: () => of(null),
  };

  let smWebSDKService: SMWebSDKService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SMWebSDKService, { provide: HttpClient, useValue: mockHttpClient }],
    });

    smWebSDKService = TestBed.inject(SMWebSDKService);
  });

  it('should be created', () => {
    expect(smWebSDKService).toBeTruthy();
  });
});

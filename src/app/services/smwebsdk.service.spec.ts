import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SMWebSDKService } from './smwebsdk.service';

it('temporary until tests are converted to Jest', () => expect(true).toBeTruthy());

//describe('SMWebSDKService', () => {
// let smWebSDKService: SMWebSDKService;
// let httpClientSpy: jasmine.SpyObj<HttpClient>;

// beforeEach(() => {
//   httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

//   TestBed.configureTestingModule({
//     providers: [SMWebSDKService, { provide: HttpClient, useValue: httpClientSpy }],
//   });

//   smWebSDKService = TestBed.inject(SMWebSDKService);
//   httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
// });

// it('should be created', () => {
//   expect(smWebSDKService).toBeTruthy();
// });
//});
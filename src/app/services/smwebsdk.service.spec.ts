import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SMWebSDKService } from './smwebsdk.service';
import { ConnectOptions } from '@soulmachines/smwebsdk';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SMWebSDKService', () => {
  let mockHttpClient: HttpTestingController;

  let smWebSDKService: SMWebSDKService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SMWebSDKService],
    });

    smWebSDKService = TestBed.inject(SMWebSDKService);
    mockHttpClient = TestBed.inject(HttpTestingController);
  });

  describe('connect', () => {
    beforeEach(() => {
      // spy on http get
    });

    describe('without tokenServer param', () => {
      /*it('should not try to fetch a token', () => {
        const mockReq = mockHttpClient.expectNone('');
      });*/
      /*it('should connect with the provided connectOptions', () => {

        smWebSDKService.connect()

      });*/
    });

    // with tokenServer
    describe('with tokenServer param', () => {
      /*it('should fetch configuration from the provided tokenServer', () => {

        smWebSDKService.connect({}, 'http://fake-token-server.com');

        const mockReq = mockHttpClient.expectOne('http://fake-token-server.com');

        expect(mockReq.request.)
        mockReq.flush({});

        mockHttpClient.verify();
      })*/
      /*it('should merge tokenServer results into connectOptions', () => {

        const connectOptions: ConnectOptions = {
          userText: 'fake-user-text',
        };

        smWebSDKService.connect(connectOptions, 'http://fake-token-server.com');

        const mockReq = mockHttpClient.expectOne('http://fake-token-server.com');
        const mockResult = {
          url: 'fake-session-server-url',
          jwt: 'fake-jwt-token',
        };

        expect(smWebSDKService.connect).toHaveBeenCalledWith({
          userText: 'fake-user-text',
          tokenServer: {
            url: 'fake-session-server-url',
            jwt: 'fake-jwt-token',
          }
        });

        mockReq.flush(mockResult);

        mockHttpClient.verify();
      }*/
    });
  });
});

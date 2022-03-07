import { TestBed } from '@angular/core/testing';
import { SMWebSDKService } from './smwebsdk.service';
import { ConnectOptions } from '@soulmachines/smwebsdk';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SMWebSDKService', () => {
  let httpMock: HttpTestingController;

  let websdkService: SMWebSDKService;

  beforeAll(() => {
    // mock webcrypto dependency at window.crypto
    Object.defineProperty(window, 'crypto', {
      value: { getRandomValues: jest.fn() },
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SMWebSDKService],
    });

    websdkService = TestBed.inject(SMWebSDKService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('connect', () => {
    let mockConnectOptions: ConnectOptions = { userText: 'test' };

    beforeEach(() => {
      websdkService.initialise({});
      jest.spyOn(websdkService.scene, 'connect').mockResolvedValue('fake-session-id');
    });

    describe('without tokenServer param', () => {
      it('should allow tokenServer not to be provided', () => {
        const connect$ = websdkService.connect(mockConnectOptions);

        connect$.subscribe(() => {
          expect(websdkService.scene.connect).toHaveBeenCalledWith(mockConnectOptions);
        });
      });

      it('should ignore a null tokenServer', () => {
        const tokenServer = null;
        const connect$ = websdkService.connect(mockConnectOptions, tokenServer);

        connect$.subscribe(() => {
          expect(websdkService.scene.connect).toHaveBeenCalledWith(mockConnectOptions);
        });
      });

      it('should ignore an empty string tokenServer', () => {
        const tokenServer = '';
        const connect$ = websdkService.connect(mockConnectOptions, tokenServer);

        connect$.subscribe(() => {
          expect(websdkService.scene.connect).toHaveBeenCalledWith(mockConnectOptions);
        });
      });

      it('should return an observable of the sessionId', () => {
        const sessionId$ = websdkService.connect(mockConnectOptions);

        sessionId$.subscribe((sessionId) => {
          expect(sessionId).toEqual('fake-session-id');
        });
      });
    });

    // with tokenServer
    describe('with tokenServer param', () => {
      const fakeTokenServerUrl = 'http://fake-token-server.com';
      const mockTokenServerResult = {
        url: 'fake-session-server-url',
        jwt: 'fake-jwt-token',
      };

      afterEach(() => {
        // ensure all requests are complete
        httpMock.verify();
      });

      it('should merge tokenServer results into connectOptions', () => {
        const connectOptions: ConnectOptions = {
          userText: 'fake-user-text',
        };

        const connect$ = websdkService.connect(connectOptions, fakeTokenServerUrl);

        connect$.subscribe(() => {
          // expect the merged options to have been used
          expect(websdkService.connect).toHaveBeenCalledWith({
            userText: 'fake-user-text',
            tokenServer: {
              uri: mockTokenServerResult.url,
              token: mockTokenServerResult.jwt,
            },
          });
        });

        // mock the token server request
        const mockTokenServerReq = httpMock.expectOne('http://fake-token-server.com');
        mockTokenServerReq.flush(mockTokenServerResult);
      });
    });
  });
});

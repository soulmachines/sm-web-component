export type APIKeyAuth = {
  apiKey: string;
};

export type CustomServerAuth = {
  authServer: string;
};

export type ManualAuth = {
  sessionServer: string;
  sessionToken: string;
};

// note that ManualAuth is identical to providing the SessionConfig directly yourself
export type AuthOptions = APIKeyAuth | CustomServerAuth | ManualAuth;

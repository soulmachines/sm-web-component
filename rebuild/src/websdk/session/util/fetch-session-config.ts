import { AuthOptions, CustomServerAuth, APIKeyAuth, ManualAuth } from '../models/auth-options';
import { APIKeyPayload } from '../models/api-key-payload';
import { SessionConfig } from '../models/session-config';

/**
 * type guards
 */

const usingApiKey = (options: AuthOptions): options is APIKeyAuth => {
  const hasApiKey = (options as APIKeyAuth).apiKey !== undefined;
  const hasOneProperty = Object.keys(options).length === 1;
  return hasApiKey && hasOneProperty;
};

const usingCustomServer = (options: AuthOptions): options is CustomServerAuth => {
  const hasAuthServer = (options as CustomServerAuth).authServer !== undefined;
  const hasOneProperty = Object.keys(options).length === 1;
  return hasAuthServer && hasOneProperty;
};

const usingManualAuth = (options: AuthOptions): options is ManualAuth => {
  const hasSessionServer = (options as ManualAuth).sessionServer !== undefined;
  const hasSessionToken = (options as ManualAuth).sessionToken !== undefined;
  const hasTwoProperties = Object.keys(options).length === 2;
  return hasSessionServer && hasSessionToken && hasTwoProperties;
};

export const resolveSessionConfig = async (authOptions: AuthOptions) => {
  let sessionConfig: SessionConfig;

  if (usingApiKey(authOptions)) {
    sessionConfig = await authWithSessionServer(authOptions);
  } else if (usingCustomServer(authOptions)) {
    sessionConfig = await authWithCustomServer(authOptions);
  } else if (usingManualAuth(authOptions)) {
    sessionConfig = authOptions;
  } else {
    throw 'invalid auth options';
  }

  return sessionConfig;
};

export const authWithCustomServer = async (
  authOptions: CustomServerAuth,
): Promise<SessionConfig> => {
  const authServer = authOptions.authServer;

  // get the session config from the custom server
  const res = await fetch(authServer);
  const config: SessionConfig = await res.json();

  // ensure it provides the required info
  if (!config.sessionServer) {
    throw 'malformed auth server response. sessionServer required.';
  }

  if (!config.sessionToken) {
    throw 'malformed auth server response. sessionToken required.';
  }

  return config;
};

export const authWithSessionServer = async (options: APIKeyAuth): Promise<SessionConfig> => {
  const { apiKey } = options;
  const payload: APIKeyPayload = JSON.parse(atob(apiKey));
  const authServer = payload.authServer;
  const headers = { key: apiKey };

  // get the session config from the custom server
  const res = await fetch(authServer, { headers });
  const { jwt, url } = await res.json();

  // ensure it provides the required info
  if (!jwt) {
    throw 'malformed auth server response. jwt required.';
  }

  if (!url) {
    throw 'malformed auth server response. url required.';
  }

  const config: SessionConfig = {
    sessionServer: url,
    sessionToken: jwt,
  };

  return config;
};

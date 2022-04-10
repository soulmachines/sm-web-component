import { SessionConfig } from '../models/session-config';
import { APIKeyPayload } from '../models/api-key-payload';
import { SoulMachinesConfig } from '../../soulmachines-config';

// get session config from sm config
export const sessionConfigFromSoulMachinesConfig = async (
  config: SoulMachinesConfig,
): Promise<SessionConfig> => {
  let sessionConfig: SessionConfig;

  if (config.apiKey) {
    sessionConfig = await fetchSessionConfig(config.apiKey);
  } else if (config.sessionServer && config.sessionToken) {
    sessionConfig = config as SessionConfig;
  } else {
    throw 'invalid config';
  }

  return sessionConfig;
};

export const fetchSessionConfig = async (apiKey: string): Promise<SessionConfig> => {
  const payload: APIKeyPayload = JSON.parse(atob(apiKey));
  const authServer = payload.authServer;
  const headers = { key: apiKey };

  return fetch(authServer, { headers })
    .then((res) => res.json())
    .then((jsonPayload) => {
      const { url, jwt } = jsonPayload;
      const { sessionServer, sessionToken } = jsonPayload;
      let config: SessionConfig;

      // support sm session server format
      if (url && jwt) {
        config = {
          sessionServer: url,
          sessionToken: jwt,
        };
      } else if (sessionServer && sessionToken) {
        config = { sessionServer, sessionToken };
      } else {
        throw 'malformed auth server response';
      }

      return config;
    });
};

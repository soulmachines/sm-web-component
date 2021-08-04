const dotenv = require('dotenv');

// load environment variables
// will fail silently when .env is not available,
// allowing a fallback to host's env vars
dotenv.config();

const { createJWTToken } = require('./scripts/create-jwt-token');

const PROXY_CONFIG = {
  '/auth': {
    secure: false,
    logLevel: 'debug',
    bypass: function (req, res, proxyOptions) {
      // Route cases to skip proxying requests
      switch (req.url) {
        case '/auth/authorize':
          res.end(
            JSON.stringify({
              success: true,
              url: `wss://${process.env.SESSION_SERVER}`,
              jwt: createJWTToken(),
            }),
          );
          return true;
      }
    },
  },
};

module.exports = PROXY_CONFIG;

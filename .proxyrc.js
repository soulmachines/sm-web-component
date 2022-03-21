const { createProxyMiddleware } = require('http-proxy-middleware');
const { createJWTToken } = require('./scripts/create-jwt-token');
const serveStatic = require('serve-static');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function (app) {
  // configure token server as a proxied request
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:5000/',
      onProxyReq: function (proxyReq, req, res) {
        switch (req.url) {
          case '/api/jwt':
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
    }),
  );

  // Use static middleware
  app.use(serveStatic('examples'));
};

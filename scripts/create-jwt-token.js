const jsonwebtoken = require('jsonwebtoken');

const createJWTToken = () => {
  if (
    !process.env.JWT_PUBLIC_KEY ||
    !process.env.JWT_PRIVATE_KEY ||
    !process.env.SESSION_SERVER
  ) {
    throw new Error('Your .env file is missing or missing key fields');
  }
  const publicKey = process.env.JWT_PUBLIC_KEY;
  const privateKey = process.env.JWT_PRIVATE_KEY;

  const payload = {
    'sm-control': process.env.ORCHESTRATION_SERVER
      ? `wss://${process.env.ORCHESTRATION_SERVER}`
      : '',
    'sm-control-via-browser': process.env.CONTROL_VIA_BROWSER === 'true',
    'sm-session-server': process.env.SESSION_SERVER,
    iss: publicKey,
  };

  const options = {
    algorithm: 'HS256',
    expiresIn: '30m',
  };

  const token = jsonwebtoken.sign(payload, privateKey, options);

  return token;
};

module.exports = { createJWTToken };

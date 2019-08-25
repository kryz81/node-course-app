const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const { JWT_SECRET } = require('../../../env');

const strategy = new JWTStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(JWT_SECRET),
  },
  async (token, done) => {
    try {
      return done(null, token);
    } catch (error) {
      done(error);
    }
  }
);

module.exports = strategy;

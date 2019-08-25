const LocalStrategy = require('passport-local').Strategy;
const userService = require('../services/user');

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await userService.getUserByEmail(email);
      if (!user) {
        return done(null, false, { msg: 'User not found' });
      }

      const validate = await userService.isValidPassword(password, user.password);
      if (!validate) {
        return done(null, false, { msg: 'Wrong password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

module.exports = strategy;

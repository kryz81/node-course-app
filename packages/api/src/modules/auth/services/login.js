const passport = require('passport');
const { sign } = require('jsonwebtoken');
const { JWT_SECRET } = require('../../../env');

const login = (req, res, next) =>
  passport.authenticate('login', {}, async (err, user) => {
    try {
      if (err || !user) {
        const error = new Error('Cannot login');
        return next(error);
      }
      req.login(user, { session: false }, error => {
        if (error) {
          return next(error);
        }

        const data = { id: user.id, email: user.email };
        const token = sign(data, JWT_SECRET);

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  });

module.exports = login;

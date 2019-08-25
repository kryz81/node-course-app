const passport = require('passport');
const { Router } = require('express');
const loginStrategy = require('./strategies/login');
const jwtStrategy = require('./strategies/jwt');
const { login } = require('./controllers/index');
const secureRoute = require('./middleware/secureRoute');

// add auth strategies
passport.use('login', loginStrategy);
passport.use('jwt', jwtStrategy);

const router = new Router();

router.post('/login', login);
router.get('/test', secureRoute, (req, res) => {
  res.send('Secure route works');
});

module.exports = app => app.use('/auth', router);

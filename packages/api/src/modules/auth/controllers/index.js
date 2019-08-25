const loginService = require('../services/login');

exports.login = (req, res, next) => {
  loginService(req, res, next);
};

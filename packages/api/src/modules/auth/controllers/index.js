const loginService = require('../services/login');

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the application
 *     tags:
 *       - auth
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email to use for login
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: user password
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *
 * @param req {object}
 * @param res {object}
 * @param next {function}
 */
exports.login = (req, res, next) => {
  loginService(req, res, next);
};

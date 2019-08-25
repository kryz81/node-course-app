const { NODE_ENV } = require('../config/env');

/**
 * Handle all application errors
 *
 * @param ctx {object}
 * @param next {function}
 */
const error = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { msg: NODE_ENV === 'development' ? err.message : 'Internal server error' };
  }
};

module.exports = error;

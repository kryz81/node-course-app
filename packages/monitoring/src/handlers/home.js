const { CHANNEL_TEST } = require('../config/queue');
const { emit } = require('../services/ws');

/**
 * Home route
 *
 * @param response {object}
 */
exports.index = ({ response }) => {
  response.body = { msg: 'Monitoring App' };
};

/**
 * Queue test route
 * Receives test messages and logs them
 *
 * @param channel {string}
 * @param payload {object}
 */
exports.test = (channel, payload) => {
  if (channel !== CHANNEL_TEST) {
    return;
  }

  // eslint-disable-next-line no-console
  console.log(payload);

  emit('test');
};

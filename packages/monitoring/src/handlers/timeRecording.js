const { CHANNEL_TIME_REPORTING } = require('../config/queue');
const { emit } = require('../services/ws');

/**
 * Notify dashboard
 *
 * @param channel {string}
 * @param payload {object}
 */
exports.notify = (channel, payload) => {
  if (channel !== CHANNEL_TIME_REPORTING) {
    return;
  }
  emit('data', payload);
};

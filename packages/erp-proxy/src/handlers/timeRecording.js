const { CHANNEL_TIME_REPORTING } = require('../config/queue');
const notifyERP = require('../services/notifyERP');
const validateTimeReporting = require('../validators/validateTimeReporting');

/**
 * Send data to ERP
 *
 * @param channel {string}
 * @param payload {object}
 */
exports.notifyERP = (channel, payload) => {
  if (channel !== CHANNEL_TIME_REPORTING) {
    return;
  }

  // validate data
  const isValid = validateTimeReporting(payload);
  if (!isValid) {
    // @todo handle error
  }

  // send to ERP
  return notifyERP(payload);
};

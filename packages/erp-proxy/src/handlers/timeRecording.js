const { CHANNEL_TIME_REPORTING } = require('../config/queue');
const notifyERP = require('../services/notifyERP');
// const validateTimeReporting = require('../validators/validateTimeReporting');

exports.notifyERP = async (channel, payload) => {
  if (channel !== CHANNEL_TIME_REPORTING) {
    return;
  }

  try {
    // validateTimeReporting(payload);
    await notifyERP(payload);
  } catch (err) {
    console.log(`${err.message}`);
  }
};

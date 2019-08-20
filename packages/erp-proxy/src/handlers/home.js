const { CHANNEL_TEST } = require('../config/queue');

exports.index = ({ response }) => {
  response.body = { msg: 'ERP Proxy' };
};

exports.test = (channel, payload) => {
  if (channel !== CHANNEL_TEST) {
    return;
  }

  // eslint-disable-next-line no-console
  console.log(payload);
};

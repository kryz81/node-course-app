const fetch = require('node-fetch');
const { ERP_URL } = require('../config/env');
const logger = require('./logger');

/**
 * Send received data to ERP
 *
 * @param data {object}
 * @returns {Promise}
 */
const notifyERP = data => {
  logger.debug(`Data sent to ERP`, data);

  return fetch(ERP_URL, {
    method: 'post',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
};

module.exports = notifyERP;

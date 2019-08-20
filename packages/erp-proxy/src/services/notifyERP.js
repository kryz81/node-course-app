const fetch = require('node-fetch');
const { ERP_URL } = require('../config/env');

const notifyERP = data =>
  fetch(ERP_URL, { method: 'post', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });

module.exports = notifyERP;

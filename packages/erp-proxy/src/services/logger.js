const { NODE_ENV } = require('../config/env');
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: NODE_ENV === 'development' ? 'debug' : 'info',
  format: format.json(),
  defaultMeta: { service: 'erp-proxy' },
  transports: [new transports.Console({ format: format.simple() })],
});

module.exports = logger;

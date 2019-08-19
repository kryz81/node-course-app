const { createServer } = require('http');
const { APP_PORT } = require('./env');
const app = require('./app');

// eslint-disable-next-line no-console
createServer(app).listen(APP_PORT, () => console.log(`Listening on ${APP_PORT}`));

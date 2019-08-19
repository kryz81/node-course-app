const { createServer } = require('http');
const { APP_PORT } = require('./env');
const app = require('./app');

// eslint-disable-next-line no-console
createServer(app.callback()).listen(APP_PORT, () => console.log(`Listening on ${APP_PORT}`));

const { createServer } = require('http');
const { APP_PORT } = require('./env');
const app = require('./app');
const ws = require('./services/ws');

const server = createServer(app.callback());

ws.init(server);

// eslint-disable-next-line no-console
server.listen(APP_PORT, () => console.log(`Listening on ${APP_PORT}`));

const bodyParser = require('body-parser');
const helmet = require('helmet');
const queue = require('@course/queue');
const db = require('./shared/services/db');
const { DB_HOST, DB_PORT, DB_NAME, QUEUE_HOST, QUEUE_PORT } = require('./env');

const homeModule = require('./modules/home');
const authModule = require('./modules/auth');

module.exports = async app => {
  // add middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(helmet());

  // connect to services
  await queue.connect(QUEUE_HOST, QUEUE_PORT);
  await db.connect(DB_HOST, DB_PORT, DB_NAME);

  // register routes
  homeModule(app);
  authModule(app);
};

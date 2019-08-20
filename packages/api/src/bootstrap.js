const bodyParser = require('body-parser');
const queue = require('@course/queue');
const homeModule = require('./modules/home');
const { QUEUE_HOST, QUEUE_PORT } = require('./env');

module.exports = app => {
  // add middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // connect to services
  queue.connect(QUEUE_HOST, QUEUE_PORT);

  // register routes
  homeModule(app);
};

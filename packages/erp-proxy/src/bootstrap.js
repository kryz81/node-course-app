const Router = require('koa-router');
const queue = require('@course/queue');
const { QUEUE_HOST, QUEUE_PORT } = require('./config/env');
const { CHANNEL_TIME_REPORTING, CHANNEL_TEST } = require('./config/queue');
const homeHandler = require('./handlers/home');
const timeRecordingHandler = require('./handlers/timeRecording');

const router = new Router();
router.get('/', homeHandler.index);

module.exports = app => {
  // connect to services
  queue.connect(QUEUE_HOST, QUEUE_PORT);

  // add middleware

  // register routes
  app.use(router.routes()).use(router.allowedMethods());

  // register queue handlers
  queue.subscribe(CHANNEL_TEST, homeHandler.test);
  queue.subscribe(CHANNEL_TIME_REPORTING, timeRecordingHandler.notifyERP);
};

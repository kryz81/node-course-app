const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const { createLogger, format, transports } = require('winston');
const { NODE_ENV } = require('./env');

const logger = createLogger({
  level: NODE_ENV === 'development' ? 'debug' : 'info',
  defaultMeta: { service: 'fake-erp' },
  transports: [new transports.Console({ format: format.json() })],
});

const app = new Koa();

app.use(bodyParser({ enableTypes: ['json'] }));

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { msg: NODE_ENV === 'development' ? err.message : 'Internal server error' };
  }
});

const router = new Router();

router.get('/', ({ response }) => {
  response.body = { msg: 'Fake ERP' };
});

router.post('/api', ({ request, response }) => {
  logger.debug(`Data received: ${JSON.stringify(request.body)}`);
  response.body = { result: 'ok', msg: 'Data received' };
});

router.get('/really-bad-route', () => {
  throw new Error('ERP is currently offline');
});

router.all('*', ({ response }) => {
  response.statusCode = 404;
  response.body = { msg: 'Not found' };
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;

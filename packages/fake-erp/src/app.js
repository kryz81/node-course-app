const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const router = new Router();

router.get('/', ({ response }) => {
  response.body = { msg: 'Fake ERP' };
});

router.post('/api', ({ response }) => {
  // @todo add logic
  response.status = 405;
  response.body = { msg: 'Not Implemented' };
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;

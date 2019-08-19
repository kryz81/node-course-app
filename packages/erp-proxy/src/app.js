const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const router = new Router();

router.get('/', ({ response }) => {
  response.body = { msg: 'ERP Proxy' };
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();

app.use(bodyParser({ enableTypes: ['json'] }));

const router = new Router();

router.get('/', ({ response }) => {
  response.body = { msg: 'Fake ERP' };
});

router.post('/api', ({ request, response }) => {
  console.log(request.body);

  response.body = request.body;
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;

const Koa = require('koa');
const bootstrap = require('./bootstrap');

const app = new Koa();

bootstrap(app);

module.exports = app;

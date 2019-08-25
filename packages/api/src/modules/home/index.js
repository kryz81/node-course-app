const { Router } = require('express');
const { index, testQueue } = require('./controllers/home');

const router = new Router();

router.get('/', index);
router.post('/testQueue', testQueue);

module.exports = app => app.use('/', router);

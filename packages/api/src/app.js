const express = require('express');
const bootstrap = require('./bootstrap');

let app = express();

bootstrap(app);

module.exports = app;

const express = require('express');

const app = express();

app.get('/', req => {
  req.json({ msg: 'API' });
});

module.exports = app;

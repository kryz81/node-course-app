const bodyParser = require('body-parser');
const homeModule = require('./modules/home');

module.exports = app => {
  // add middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // register routes
  homeModule(app);
};

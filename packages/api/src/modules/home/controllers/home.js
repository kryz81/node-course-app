const { publish } = require('@course/queue');

/**
 * Home route
 *
 * @param req {object}
 * @param res {object}
 */
exports.index = (req, res) => {
  res.json({ msg: 'API' });
};

/**
 * Test queue
 *
 * @param req {object}
 * @param res {object}
 */
exports.testQueue = (req, res) => {
  publish('test', req.body);
  res.json({ msg: 'Triggered', payload: req.body });
};

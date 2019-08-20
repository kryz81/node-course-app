const { publish } = require('@course/queue');

exports.index = req => {
  req.json({ msg: 'API' });
};

exports.testQueue = (req, res) => {
  publish('test', req.body);
  res.json({ msg: 'Triggered', payload: req.body });
};

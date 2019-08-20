const redis = require('redis');

let client;

const connect = () => {
  if (!client) {
    client = redis.createClient();
  }
};

module.exports = {
  publish: (name, payload) => {
    connect();
    client.publish(name, JSON.stringify(payload));
  },
};

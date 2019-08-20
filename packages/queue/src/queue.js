const redis = require('redis');

// redis client singleton
let client;

module.exports = {
  /**
   * Connect to redis if not connected
   *
   * @param host {string}
   * @param port {number}
   * @param options {object}
   */
  connect: (host, port, options = {}) => {
    if (!client) {
      client = redis.createClient({
        ...options,
        host: host || 'localhost',
        port: port || 6379,
      });
    }
  },

  /**
   * Notify subscribers
   *
   * @param channel {string}
   * @param payload {string}
   */
  publish: (channel, payload) => {
    client.publish(channel, JSON.stringify(payload));
  },

  /**
   * Subscribe to channel
   *
   * @param channel {string}
   * @param listener {function}
   */
  subscribe(channel, listener) {
    client.on('message', (channel, payload) => listener(channel, JSON.parse(payload)));
    client.subscribe(channel);
  },
};

const MongoClient = require('mongodb').MongoClient;

let client;

/**
 * Connect to mongo instance and select database
 *
 * @param DB_HOST {string}
 * @param DB_PORT {number}
 * @param DB_NAME {string}
 * @returns {Promise}
 */
const connect = async (DB_HOST, DB_PORT, DB_NAME) => {
  client = new MongoClient(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
};

const getDb = client;

module.exports = {
  connect,
  getDb,
};

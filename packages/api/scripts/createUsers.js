const MongoClient = require('mongodb').MongoClient;
const { genSalt, hash } = require('bcrypt');
let users = require(__dirname + '/users');

const hashPassword = async password => {
  const salt = await genSalt(10);
  return hash(password, salt);
};

(async () => {
  users = await Promise.all(
    users.map(async user => {
      const password = await hashPassword(user.password);
      return { ...user, password };
    })
  );

  const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });

  try {
    const db = client.db('node-course-app');
    let coll = db.collection('users');
    await coll.deleteMany({});
    await coll.insertMany(users);
  } catch (err) {
    console.log(err.message);
  } finally {
    await client.close();
  }
})();

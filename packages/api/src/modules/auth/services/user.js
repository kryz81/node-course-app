const { compare } = require('bcrypt');
const { getDb } = require('../../../shared/services/db');

const COLL = 'users';

/**
 * Get user by email
 *
 * @param email
 * @returns {Promise}
 */
const getUserByEmail = email => {
  return getDb()
    .collection(COLL)
    .findOne({ email });
};

/**
 * Verify user password
 *
 * @param password
 * @param hash
 * @returns {Promise}
 */
const isValidPassword = (password, hash) => compare(password, hash);

module.exports = {
  getUserByEmail,
  isValidPassword,
};

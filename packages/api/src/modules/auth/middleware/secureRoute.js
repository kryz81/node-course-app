const passport = require('passport');

//This verifies that the token sent by the user is valid
module.exports = passport.authenticate('jwt', { session: false });

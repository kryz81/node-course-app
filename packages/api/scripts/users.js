const { v4 } = require('uuid');

module.exports = [
  {
    _id: v4(),
    firstname: 'Tim',
    lastname: 'Tiger',
    email: 'tim.tiger@adesso.de',
    password: 'tiger',
  },
  {
    _id: v4(),
    firstname: 'Paula',
    lastname: 'Puma',
    email: 'paula.puma@adesso.de',
    password: 'puma',
  },
  {
    _id: v4(),
    firstname: 'Kevin',
    lastname: 'Katze',
    email: 'kevin.katze@adesso.de',
    password: 'katze',
  },
  {
    _id: v4(),
    firstname: 'Jonas',
    lastname: 'Jaguar',
    email: 'jonas.jaguar@adesso.de',
    password: 'jaguar',
  },
];

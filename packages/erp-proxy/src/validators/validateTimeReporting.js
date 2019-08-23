const { object, string, number, validate } = require('@hapi/joi');

const schema = object()
  .keys({
    username: string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    password: string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [string(), number()],
    birthyear: number()
      .integer()
      .min(1900)
      .max(2013),
    email: string().email({ minDomainSegments: 2 }),
  })
  .with('username', 'birthyear')
  .without('password', 'access_token');

const validateTimeReporting = data => validate(data, schema);

module.exports = validateTimeReporting;

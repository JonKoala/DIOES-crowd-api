const passportJwt = require('passport-jwt')

const ldap = require('./ldap')


const options = {
  secretOrKey: process.env['DIARIOBOT_JWT_SECRET'],
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = new passportJwt.Strategy(options, async (payload, done) => {
  try {
    var user = await ldap.getUser(payload.username)
    return done(null, (user) ? payload : false)
  } catch (err) {
    return done(err)
  }
})

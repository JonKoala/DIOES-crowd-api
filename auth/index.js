const passport = require('passport')

const ldap = require('./ldap')
const strategy = require('./strategy')


passport.use(strategy)

module.exports = {

  initialize: passport.initialize,

  authenticate (...groups) {

    var middlewares = [passport.authenticate("jwt", { session: false })]

    if (groups.length > 0) {

      middlewares.push((req, res, next) => {

        Promise.all(groups.map(group => {
          return ldap.checkMembership(req.user.username, group)
        })).then(results => {
          if (results.some(result => !result))
            res.status(401).send('Unauthorized')
          else
            next()
        })

      })
    }

    return middlewares
  }
}

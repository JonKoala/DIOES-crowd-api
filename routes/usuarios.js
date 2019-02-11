const jwt = require('jwt-simple')
const router = require('express').Router()

const AppError = require('../error/AppError')
const ldap = require('../auth/ldap')


router.post('/login', async (req, res) => {

  var user = await ldap.getUser(req.body.username)
  if (user) {
    var authenticated = await ldap.authenticate(user.username, req.body.password)
    if (authenticated) {
      user.isAdmin = await ldap.checkMembership(user.username, process.env['DIARIOBOT_AUTH_GROUP_ADMIN'])
      res.json(jwt.encode(user, process.env['DIARIOBOT_JWT_SECRET']))
    } else {
      throw new AppError('Wrong password.')
    }
  } else {
    throw new AppError('User not found.')
  }
})

module.exports = router

const express = require('express')
const jwt = require('jwt-simple')

const AppError = require('../error/AppError')
const ldap = require('../auth/ldap')


const router = express.Router()

router.post('/login', async (req, res) => {

  var user = await ldap.getUser(req.body.username)
  if (user) {
    user = {
      email: user.mail,
      fullName: user.cn,
      name: user.givenName,
      username: user.userPrincipalName
    }

    var authenticated = await ldap.authenticate(user.username, req.body.password)
    if (authenticated)
      res.json(jwt.encode(user, process.env['DIARIOBOT_JWT_SECRET']))
    else
      throw new AppError('Wrong password.')

  } else {
    throw new AppError('User not found.')
  }

})

module.exports = router

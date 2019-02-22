const ActiveDirectory = require('activedirectory')

const client = new ActiveDirectory({
  url: process.env['DIARIOBOT_ACTIVEDIRECTORY_URL'],
  baseDN: process.env['DIARIOBOT_ACTIVEDIRECTORY_BASEDN'],
  username: process.env['DIARIOBOT_ACTIVEDIRECTORY_USERNAME'],
  password: process.env['DIARIOBOT_ACTIVEDIRECTORY_PASSWORD']
})

module.exports = {
  authenticate (username, password) {
    return new Promise((resolve, reject) => {
      try {
        client.authenticate(username, password, (err, authenticated) => {
          resolve(authenticated)
        })
      } catch (err) {
        reject(err)
      }
    })
  },

  checkMembership (username, group) {
    return new Promise((resolve, reject) => {
      try {
        client.isUserMemberOf(username, group, (err, isMember) => {
          resolve(isMember)
        })
      } catch (err) {
        reject(err)
      }
    })
  },

  getUser (username) {
    return new Promise((resolve, reject) => {
      try {
        client.findUser(username, (err, user) => {
          if (user)
            resolve({
              email: user.mail,
              fullName: user.cn,
              name: user.givenName,
              registry: user.sAMAccountName,
              username: user.userPrincipalName
            })
          else
            resolve()
        })
      } catch (err) {
        reject(err)
      }
    })
  }
}

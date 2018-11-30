const Sequelize = require('sequelize')


module.exports = new Sequelize({
  host: process.env['DIARIOBOT_DATABASE_HOST'],
  database: process.env['DIARIOBOT_DATABASE_NAME'],
  databaseVersion: process.env['DIARIOBOT_DATABASE_VERSION'],
  username: process.env['DIARIOBOT_DATABASE_USERNAME'],
  password: process.env['DIARIOBOT_DATABASE_PASSWORD'],
  dialectOptions: {
    encrypt: (process.env['DIARIOBOT_DATABASE_ENCRYPT'] === 'true')
  },

  dialect: 'mssql',
  logging: false,
  operatorsAliases: false
})

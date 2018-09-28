var Sequelize = require('sequelize')
var appconfig = require('../appconfig')

// define if the configurations are coming from appconfig or from env variables
var dbconfig = { ...appconfig['db'] };
if (Object.keys(process.env).some(key =>  key.startsWith('DIARIOBOT'))) {
  dbconfig = {
    host: process.env['DIARIOBOT_DATABASE_HOST'],
    database: process.env['DIARIOBOT_DATABASE_NAME'],
    databaseVersion: process.env['DIARIOBOT_DATABASE_VERSION'],
    username: process.env['DIARIOBOT_DATABASE_USERNAME'],
    password: process.env['DIARIOBOT_DATABASE_PASSWORD'],
    dialectOptions: {
      encrypt: (process.env['DIARIOBOT_DATABASE_ENCRYPT'] === 'true')
    }
  };
}

var db = new Sequelize({
  ...dbconfig,

  dialect: 'mssql',
  operatorsAliases: false,
  logging: false
});

module.exports = db;

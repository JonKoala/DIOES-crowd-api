var Sequelize = require('sequelize')
var appconfig = require('../appconfig')

var db = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'sequelize-msnodesqlv8',
  dialectOptions: {
  	driver: appconfig['db']['driver'],
    trustedConnection: true
  },
  host: appconfig['db']['host'],
  database: appconfig['db']['database'],

  operatorsAliases: false,
  logging: false
});

module.exports = db;

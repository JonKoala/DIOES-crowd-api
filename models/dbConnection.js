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

  logging: false
});

module.exports = db;

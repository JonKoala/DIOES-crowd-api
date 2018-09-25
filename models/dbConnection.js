var Sequelize = require('sequelize')
var appconfig = require('../appconfig')

var db = new Sequelize({
  ...appconfig['db'],

  operatorsAliases: false,
  logging: false
});

module.exports = db;

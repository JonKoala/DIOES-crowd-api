var sequelize = require('sequelize')
var db = require('./dbConnection')

var blacklisted = db.define('blacklisted', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  palavra: sequelize.STRING
}, {
  timestamps: false,
  tableName: 'Backlist_Palavra_DIOES3'
});

module.exports = blacklisted;

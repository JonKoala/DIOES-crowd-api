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
  tableName: 'Keyword_Backlisted'
});

module.exports = blacklisted;

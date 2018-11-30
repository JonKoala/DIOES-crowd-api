const sequelize = require('sequelize')

const db = require('./connection')


module.exports = db.define('blacklisted', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  palavra: sequelize.STRING
}, {
  timestamps: false,
  tableName: 'Keyword_Backlisted'
})

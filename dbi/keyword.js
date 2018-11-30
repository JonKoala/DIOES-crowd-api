const sequelize = require('sequelize')

const db = require('./connection')


module.exports = db.define('keyword', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  classe_id: sequelize.INTEGER,
  palavra: sequelize.STRING
}, {
  timestamps: false,
  tableName: 'Keyword'
})

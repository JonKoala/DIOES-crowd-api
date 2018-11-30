const sequelize = require('sequelize')

const db = require('./connection')


module.exports = db.define('macrorregiao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: sequelize.STRING
}, {
  timestamps: false,
  tableName: 'Macrorregiao'
})

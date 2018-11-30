const sequelize = require('sequelize')

const db = require('./connection')


module.exports = db.define('classe', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: sequelize.STRING,
  ordem: sequelize.INTEGER
}, {
  timestamps: false,
  tableName: 'Classe'
})

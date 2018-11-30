const sequelize = require('sequelize')

const db = require('./connection')


module.exports = db.define('classificacao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    field: 'publicacao_id'
  },
  classe_id: sequelize.INTEGER
}, {
  timestamps: false,
  tableName: 'Classificacao'
})

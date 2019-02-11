const sequelize = require('sequelize')

const db = require('./connection')


module.exports = db.define('publicacao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  edicao: sequelize.INTEGER,
  numero: sequelize.INTEGER,
  data: sequelize.DATE,
  categoria: sequelize.STRING,
  orgao: sequelize.STRING,
  suborgao: sequelize.STRING,
  tipo: sequelize.STRING,
  materia: sequelize.STRING,
  identificador: sequelize.INTEGER,
  corpo: sequelize.STRING
}, {
  timestamps: false,
  tableName: 'Publicacao'
})

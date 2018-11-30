const sequelize = require('sequelize')

const db = require('./connection')


module.exports = db.define('predicao', {
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
  corpo: sequelize.STRING,
  macrorregiao_id: sequelize.INTEGER,
  macrorregiao: sequelize.STRING,
  classe_id: sequelize.INTEGER,
  classe_ordem: sequelize.INTEGER,
  classe: sequelize.STRING,
  valor: sequelize.DECIMAL
}, {
  timestamps: false,
  tableName: 'Predicao'
})

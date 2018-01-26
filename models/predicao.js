var sequelize = require('sequelize')
var db = require('./dbConnection')

var predicao = db.define('predicao', {
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
  classe_id: sequelize.INTEGER,
  classe_ordem: sequelize.INTEGER,
  classe: sequelize.STRING
}, {
  timestamps: false,
  tableName: 'Predicao'
});

module.exports = predicao;

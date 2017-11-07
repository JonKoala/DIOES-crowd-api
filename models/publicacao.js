var sequelize = require('sequelize')
var db = require('./dbConnection')

var publicacao = db.define('publicacao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  edicao: sequelize.STRING,
  numero: sequelize.STRING,
  data: {
    type: sequelize.DATE,
    get() {
      var fragments = this.getDataValue('data').split('/');
      return new Date(fragments[2], fragments[1], fragments[0]);
    }
  },
  categoria: sequelize.STRING,
  orgao: sequelize.STRING,
  suborgao: sequelize.STRING,
  tipo: sequelize.STRING,
  materia: sequelize.STRING,
  identificador: sequelize.STRING,
  texto: {
    type: sequelize.STRING,
    field: 'publicacao'
  }
}, {
  timestamps: false,
  tableName: 'DIOES3'
});

module.exports = publicacao;

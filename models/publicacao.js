var sequelize = require('sequelize')
var db = require('./dbConnection')

var publicacao = db.define('publicacao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  randId: {
    type: sequelize.STRING,
    field: 'rand_id'
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
  tableName: 'Randomized_DIOES3'
});

//needed in case this view is the first one to be queried when the server is created
//if the first SELECT to the database is about this view, sequelize will freak out (it appears to hate this view in particular...)
db.query('SELECT 1');

module.exports = publicacao;

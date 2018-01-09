var sequelize = require('sequelize')
var db = require('./dbConnection')

var publicacao = db.define('publicacao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  randId: {
    type: sequelize.STRING,
    field: 'rand_id'
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
  tableName: 'Randomizable_Publicacao'
});

//needed in case this view is the first one to be queried when the server is created
//if the first SELECT to the database is about this view, sequelize will freak out (it appears to hate this view in particular...)
db.query('SELECT 1');

module.exports = publicacao;

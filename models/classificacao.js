var sequelize = require('sequelize')
var db = require('./dbConnection')

var classificacao = db.define('classificacao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    field: 'publicacao_id'
  },
  classe_id: sequelize.INTEGER
}, {
  timestamps: false,
  tableName: 'Classificacao'
});

module.exports = classificacao;

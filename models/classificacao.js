var sequelize = require('sequelize')
var db = require('./dbConnection')

var classificacao = db.define('classificacao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    field: 'DIOES3_id'
  },
  isTi: {
    type: sequelize.BOOLEAN,
    field: 'classe_ti'
  }
}, {
  timestamps: false,
  tableName: 'Classificacao_DIOES3'
});

module.exports = classificacao;

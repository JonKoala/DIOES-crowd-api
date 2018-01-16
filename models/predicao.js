var sequelize = require('sequelize')
var db = require('./dbConnection')

var predicao = db.define('predicao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    field: 'DIOES3_id'
  },
  classe_id: sequelize.INTEGER
}, {
  timestamps: false,
  tableName: 'Predicao_Classificacao_DIOES3'
});

module.exports = predicao;

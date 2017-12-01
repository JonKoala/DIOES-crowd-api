var sequelize = require('sequelize')
var db = require('./dbConnection')

var classe = db.define('classe', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: sequelize.STRING
}, {
  timestamps: false,
  tableName: 'Classe_DIOES3'
});

module.exports = classe;

var sequelize = require('sequelize')
var db = require('./dbConnection')

var classe = db.define('classe', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: sequelize.STRING,
  ordem: sequelize.INTEGER
}, {
  timestamps: false,
  tableName: 'Classe'
});

module.exports = classe;

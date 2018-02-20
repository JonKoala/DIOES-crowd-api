var sequelize = require('sequelize')
var db = require('./dbConnection')

var macrorregiao = db.define('macrorregiao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: sequelize.STRING
}, {
  timestamps: false,
  tableName: 'Macrorregiao_DIOES3'
});

module.exports = macrorregiao;

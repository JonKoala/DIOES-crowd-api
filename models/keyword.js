var sequelize = require('sequelize')
var db = require('./dbConnection')

var keyword = db.define('keyword', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  classe_id: sequelize.INTEGER,
  palavra: sequelize.STRING
}, {
  timestamps: false,
  tableName: 'Classe_Keyword_DIOES3'
});

module.exports = keyword;

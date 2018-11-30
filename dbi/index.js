const blacklisted = require('./blacklisted')
const classe = require('./classe')
const classificacao = require('./classificacao')
const keyword = require('./keyword')
const macrorregiao = require('./macrorregiao')
const predicao = require('./predicao')
const publicacao = require('./publicacao')


//publicacao 1:0 classificacao
classificacao.belongsTo(publicacao, { foreignKey: 'id' })
publicacao.hasOne(classificacao, { foreignKey: 'id' })

//classe 1:0 classificacao
classificacao.belongsTo(classe, { foreignKey: 'id' })
classe.hasOne(classificacao, { foreignKey: 'id' })

//classe 1:n keyword
keyword.belongsTo(classe, { foreignKey: 'classe_id' })
classe.hasMany(keyword, { foreignKey: 'classe_id', as: 'keywords' })

module.exports = {
  blacklisted,
  classe,
  classificacao,
  keyword,
  macrorregiao,
  predicao,
  publicacao
}

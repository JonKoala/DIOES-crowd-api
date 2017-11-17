var publicacao = require('./publicacao')
var classificacao = require('./classificacao')

//publicacao 1:0 classificacao
classificacao.belongsTo(publicacao, {foreignKey: 'id'})
publicacao.hasOne(classificacao, {foreignKey: 'id'})

module.exports.publicacao = publicacao;
module.exports.classificacao = classificacao;

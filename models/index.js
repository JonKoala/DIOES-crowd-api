var publicacao = require('./publicacao')
var classe = require('./classe')
var classificacao = require('./classificacao')

//publicacao 1:0 classificacao
classificacao.belongsTo(publicacao, {foreignKey: 'id'})
publicacao.hasOne(classificacao, {foreignKey: 'id'})

//classe 1:0 classificacao
classificacao.belongsTo(classe, {foreignKey: 'id'})
classe.hasOne(classificacao, {foreignKey: 'id'})

module.exports.publicacao = publicacao;
module.exports.classe = classe;
module.exports.classificacao = classificacao;

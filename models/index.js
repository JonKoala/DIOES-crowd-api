var publicacao = require('./publicacao')
var classe = require('./classe')
var classificacao = require('./classificacao')
var predicao = require('./predicao')
var keyword = require('./keyword')
var blacklisted = require('./blacklisted')
var macrorregiao = require('./macrorregiao')

//publicacao 1:0 classificacao
classificacao.belongsTo(publicacao, {foreignKey: 'id'})
publicacao.hasOne(classificacao, {foreignKey: 'id'})

//classe 1:0 classificacao
classificacao.belongsTo(classe, {foreignKey: 'id'})
classe.hasOne(classificacao, {foreignKey: 'id'})

//classe 1:n keyword
keyword.belongsTo(classe, {foreignKey: 'classe_id'})
classe.hasMany(keyword, {foreignKey: 'classe_id', as: 'keywords'})

module.exports.publicacao = publicacao;
module.exports.classe = classe;
module.exports.classificacao = classificacao;
module.exports.keyword = keyword;
module.exports.predicao = predicao;
module.exports.blacklisted = blacklisted;
module.exports.macrorregiao = macrorregiao;

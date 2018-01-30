var appconfig = require('../appconfig')
var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/rand', (req, res) => {

  model.publicacao.findOne({
    include: [{model: model.classificacao}],
    where: [
      {'$classificacao.classe_id$': null},
      {tipo: {$in: appconfig['crowdsourcer']['tipos_publicacoes']}}
    ],
    order: 'randId'
  }).then(publicacao => {
    res.send(publicacao);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/list/:column', (req, res) => {

  var column = req.params.column;

  model.publicacao.findAll({
    where: {tipo: {$in: appconfig['crowdsourcer']['tipos_publicacoes']}},
    attributes: [column],
    group: column
  }).then(result => {
    res.send(result.map(entry => entry[column]));
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/:id', (req, res) => {

  let id = req.params.id;

  model.publicacao.findById(id)
  .then(publicacao => {
    res.send(publicacao);
  }).catch(err => {
    res.status(500).send(err);
  });
});

module.exports = router;

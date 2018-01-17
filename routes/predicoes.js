var appconfig = require('../appconfig')
var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/', (req, res) => {

  var data = req.query.data;

  model.publicacao.findAll({
    where: [
      {data: data},
      {tipo: {$in: appconfig['crowdsourcer']['tipos_publicacoes']}}
    ],
    include: {model: model.predicao, where: {id: {$not: null}}, include: {model: model.classe}}
  }).then(publicacoes => {
    res.send(publicacoes);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/latest', (req, res) => {

  model.publicacao.findOne({
    attributes: ['data'],
    order: [['data', 'DESC']],
    include: [{model: model.predicao, where: {id: {$not: null}}}]
  }).then(publicacao => {
    res.send(publicacao.data);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/data/:year-:month-:day', (req, res) => {

  var date = req.params.year + '-' + req.params.month + '-' + req.params.day;

  model.publicacao.findAll({
    where: [
      {data: date},
      {tipo: {$in: appconfig['crowdsourcer']['tipos_publicacoes']}}
    ],
    include: {model: model.predicao, where: {id: {$not: null}}, include: {model: model.classe}}
  }).then(publicacoes => {
    res.send(publicacoes);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/:id', (req, res) => {

  let id = req.params.id;

  model.publicacao.findById(id,
    {include: [
      {model: model.predicao, where: {id: {$not: null}}, include: {model: model.classe}}
  ]}).then(publicacao => {
    res.send(publicacao);
  }).catch(err => {
    res.status(500).send(err);
  });
});

module.exports = router;

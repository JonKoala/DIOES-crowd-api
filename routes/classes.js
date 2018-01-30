var appconfig = require('../appconfig')
var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/', (req, res) => {

  model.classe.findAll()
  .then(classes => {
    res.send(classes);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/predictable', (req, res) => {

  model.classe.findAll({
    where: {nome: {$in: appconfig['crowdsourcer']['classes_predictables']}}
  }).then(classes => {
    res.send(classes);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/keywords', (req, res) => {

  model.classe.findAll({include: [{model: model.keyword, as: 'keywords'}]})
  .then(classes => {
    res.send(classes);
  }).catch(err => {
    res.status(500).send(err);
  });
});

module.exports = router;

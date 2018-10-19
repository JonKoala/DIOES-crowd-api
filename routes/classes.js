var filters = require('../utils/crowdsourcer.filters')
var model = require('../models')
var Op = require('sequelize').Op
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
    where: {nome: {[Op.in]: filters.classes}}
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

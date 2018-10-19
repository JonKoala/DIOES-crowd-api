var filters = require('../utils/crowdsourcer.filters')
var model = require('../models')
var Op = require('sequelize').Op
var express = require('express')
var router = express.Router();

router.get('/rand', (req, res) => {

  model.publicacao.findOne({
    include: [{model: model.classificacao}],
    where: [
      {'$classificacao.classe_id$': null},
      {tipo: {[Op.in]: filters.tipos}}
    ],
    order: ['randId']
  }).then(publicacao => {
    res.send(publicacao);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/list/:column', (req, res) => {

  var column = req.params.column;

  model.publicacao.findAll({
    where: {tipo: {[Op.in]: filters.tipos}},
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

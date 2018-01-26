var appconfig = require('../appconfig')
var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/paginable', (req, res) => {

  // default
  var findOptions = {
    where: [ {tipo: {$in: appconfig['crowdsourcer']['tipos_publicacoes']}} ]
  };

  // pagination logic
  if ('itemsPerPage' in req.query && 'page' in req.query) {
    findOptions.limit = req.query.itemsPerPage;
    findOptions.offset = req.query.itemsPerPage * req.query.page;
  }

  // sorting logic
  if ('sortBy' in req.query && 'sortOrder' in req.query)
    findOptions.order = [[req.query.sortBy, req.query.sortOrder]];

  // where logic
  if ('whereData' in req.query)
    findOptions.where.push({data: req.query.whereData});

  model.predicao.findAndCountAll(findOptions)
  .then(result => {
    res.send(result);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/latest', (req, res) => {

  model.predicao.findOne({
    attributes: ['data'],
    order: [['data', 'DESC']],
  }).then(predicao => {
    res.send(predicao.data);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/data/:year-:month-:day', (req, res) => {

  var date = req.params.year + '-' + req.params.month + '-' + req.params.day;

  model.predicao.findAll({
    where: [
      {data: date},
      {tipo: {$in: appconfig['crowdsourcer']['tipos_publicacoes']}}
    ]
  }).then(predicoes => {
    res.send(predicoes);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.get('/:id', (req, res) => {

  let id = req.params.id;

  model.predicao.findById(id)
  .then(publicacao => {
    res.send(publicacao);
  }).catch(err => {
    res.status(500).send(err);
  });
});

module.exports = router;

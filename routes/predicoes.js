var appconfig = require('../appconfig')
var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/paginable', (req, res) => {

  // default filter
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

  // filtering logic
  if ('filterStartingDate' in req.query)
    findOptions.where.push({data: {$gte: req.query.filterStartingDate}})
  if ('filterEndingDate' in req.query)
    findOptions.where.push({data: {$lte: req.query.filterEndingDate}})
  if ('filterTipo' in req.query)
    findOptions.where.push({tipo: req.query.filterTipo});
  if ('filterCategoria' in req.query)
    findOptions.where.push({categoria: req.query.filterCategoria});
  if ('filterOrgao' in req.query)
    findOptions.where.push({orgao: req.query.filterOrgao});
  if ('filterSuborgao' in req.query)
    findOptions.where.push({suborgao: req.query.filterSuborgao});
  if ('filterClasse' in req.query)
    findOptions.where.push({classe_id: parseInt(req.query.filterClasse)});
  if ('filterMinValor' in req.query)
    findOptions.where.push({valor: {$gte: parseInt(req.query.filterMinValor)}});
  if ('filterMaxValor' in req.query)
    findOptions.where.push({valor: {$lte: parseInt(req.query.filterMaxValor)}});

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

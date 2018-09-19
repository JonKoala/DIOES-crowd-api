var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/', (req, res) => {
  
  model.blacklisted.findAll()
  .then(blacklisted => {
    res.send(blacklisted);
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.post('/', (req, res) => {

  var palavra = req.body.palavra;

  model.blacklisted.create({palavra: palavra})
  .then(() => {
    res.send();
  }).catch(err => {
    res.status(500).send(err);
  });
});

router.delete('/', (req, res) => {

  var palavra = req.query.palavra;

  model.blacklisted.destroy({where: {palavra: palavra}})
  .then(() => {
    res.send();
  }).catch(err => {
    res.status(500).send(err);
  });
});

module.exports = router;

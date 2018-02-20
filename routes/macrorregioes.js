var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/', (req, res) => {

  model.macrorregiao.findAll()
  .then(macrorregioes => {
    res.send(macrorregioes);
  }).catch(err => {
    res.status(500).send(err);
  });
});

module.exports = router;

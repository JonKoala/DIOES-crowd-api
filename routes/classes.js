var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/', (req, res) => {

  let id = req.params.id;

  model.classe.findAll()
    .then(classes => {
      res.send(classes);
    }).catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;

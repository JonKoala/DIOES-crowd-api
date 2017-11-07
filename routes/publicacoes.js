var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/', (req, res) => {

  model.publicacao.findAll()
    .then(publicacoes => {
      res.send(publicacoes);
    }).catch(err => {
      res.status(500).send(err);
    });
});

router.get('/random', (req, res) => {

  //TODO: too slow - alternative: use a view or sp instead, and apply this: https://stackoverflow.com/a/19419/1269898
  model.publicacao.find({limit: 0, order: 'NEWID()'})
    .then(publicacao => {
      res.send(publicacao);
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

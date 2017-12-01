var model = require('../models')
var express = require('express')
var router = express.Router();

router.post('/', (req, res) => {

  let publicacao = req.body.publicacao;
  let isTi = req.body.isTi;

  model.classificacao.destroy({where: {id: publicacao.id}})
    .then(() => {
      if (isTi !== null)
        return model.classificacao.create({id: publicacao.id, isTi: isTi});
      return;
    }).then(() => {
      res.send();
    }).catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;

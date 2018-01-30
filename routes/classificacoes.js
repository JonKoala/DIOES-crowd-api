var model = require('../models')
var express = require('express')
var router = express.Router();

router.post('/', (req, res) => {

  let publicacao = req.body.publicacao;
  let classe = req.body.classe;

  model.classificacao.destroy({where: {id: publicacao}})
  .then(() => {
    if (classe !== null)
      return model.classificacao.create({id: publicacao, classe_id: classe});
    return;
  }).then(() => {
    res.send();
  }).catch(err => {
    res.status(500).send(err);
  });
});

module.exports = router;

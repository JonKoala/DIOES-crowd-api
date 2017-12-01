var model = require('../models')
var express = require('express')
var router = express.Router();

router.get('/rand', (req, res) => {

  let id = req.params.id;

  model.publicacao.findOne({
      include: [{model: model.classificacao}],
      where: [
        {'$classificacao.classe_id$': null},
        {tipo: {$in: ['Aviso de Licitação', 'Contrato', 'Ata Registro de Preço', 'Inexigibilidade de Licitação', 'Dispensa de Licitação']}}
      ],
      order: 'randId'
    }).then(publicacao => {
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

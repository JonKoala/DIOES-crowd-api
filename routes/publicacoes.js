const Op = require('sequelize').Op
const router = require('express').Router()

const dbi = require('../dbi')
const filters = require('../utils/crowdsourcer.filters')


router.get('/rand', async (req, res) => {
  var publicacao = await dbi.publicacao.findOne({
    include: [ { model: dbi.classificacao } ],
    where: [
      { '$classificacao.classe_id$': null },
      { tipo: { [Op.in]: filters.tipos } }
    ],
    order: [ 'randId' ],
    raw: true
  })
  res.json(publicacao)
})

router.get('/list/:column', async (req, res) => {
  var column = req.params.column

  var publicacoes = await dbi.publicacao.findAll({
    where: { tipo: { [Op.in]: filters.tipos } },
    attributes: [ column ],
    group: column,
    raw: true
  })
  var columnList = publicacoes.map(entry => entry[column])
  res.json(columnList)
})

router.get('/:id', async (req, res) => {
  var publicacao = await dbi.publicacao.findById(req.params.id, { raw: true })
  res.json(publicacao)
})

module.exports = router

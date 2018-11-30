const Op = require('sequelize').Op
const router = require('express').Router()

const dbi = require('../dbi')
const filters = require('../utils/crowdsourcer.filters')


router.get('/', async (req, res) => {
  var classes = await dbi.classe.findAll({ raw: true })
  res.json(classes)
})

router.get('/predictable', async (req, res) => {
  var classes = await dbi.classe.findAll({ where: { nome: { [Op.in]: filters.classes } }, raw: true })
  res.json(classes)
})

router.get('/keywords', async (req, res) => {
  var classes = await dbi.classe.findAll({ include: [ { model: dbi.keyword, as: 'keywords' } ], raw: true })
  res.json(classes)
})

module.exports = router

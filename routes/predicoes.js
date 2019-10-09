const Op = require('sequelize').Op
const router = require('express').Router()

const dbi = require('../dbi')
const filters = require('../utils/crowdsourcer.filters')


router.get('/paginable', async (req, res) => {

  // default filter
  var findOptions = { where: [ { tipo: { [Op.in]: filters.tipos } } ], raw: true }

  // pagination logic
  if ('itemsPerPage' in req.query && 'page' in req.query) {
    findOptions.limit = req.query.itemsPerPage
    findOptions.offset = req.query.itemsPerPage * req.query.page
  }

  // sorting logic
  if ('sortBy' in req.query && 'sortOrder' in req.query)
    findOptions.order = [ [ req.query.sortBy, req.query.sortOrder ] ]

  // filtering logic
  if ('filterStartingDate' in req.query)
    findOptions.where.push({ data: { [Op.gte]: req.query.filterStartingDate } })
  if ('filterEndingDate' in req.query)
    findOptions.where.push({ data: { [Op.lte]: req.query.filterEndingDate } })
  if ('filterMinValor' in req.query)
    findOptions.where.push({ valor: { [Op.gte]: parseInt(req.query.filterMinValor) } })
  if ('filterMaxValor' in req.query)
    findOptions.where.push({ valor: { [Op.lte]: parseInt(req.query.filterMaxValor) } })
  if ('filterCorpo' in req.query)
    findOptions.where.push({ corpo: { [Op.like]: `%${req.query.filterCorpo}%` } })
  if ('filterTipo' in req.query)
    findOptions.where.push({ tipo: req.query.filterTipo })
  if ('filterCategoria' in req.query)
    findOptions.where.push({ categoria: req.query.filterCategoria })
  if ('filterOrgao' in req.query)
    findOptions.where.push({ orgao: req.query.filterOrgao })
  if ('filterSuborgao' in req.query)
    findOptions.where.push({ suborgao: req.query.filterSuborgao })
  if ('filterFonte' in req.query)
    findOptions.where.push({ fonte: req.query.filterFonte })
  if ('filterClasse' in req.query)
    findOptions.where.push({ classe_id: parseInt(req.query.filterClasse) })

  var predicoes = await dbi.predicao.findAndCountAll(findOptions)
  res.json(predicoes)
})

router.get('/:id', async (req, res) => {
  var predicao = await dbi.predicao.findByPk(req.params.id, { raw: true })
  res.json(predicao)
})

module.exports = router

const router = require('express').Router()

const dbi = require('../dbi')


router.get('/', async (req, res) => {
  var macrorregioes = await dbi.macrorregiao.findAll({ raw: true })
  res.json(macrorregioes)
})

module.exports = router

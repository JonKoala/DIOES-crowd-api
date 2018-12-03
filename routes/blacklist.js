const router = require('express').Router()

const AppError = require('../error/AppError')
const auth = require('../auth')
const dbi = require('../dbi')


router.get('/', async (req, res) => {
  var blacklist = await dbi.blacklisted.findAll({ raw: true })
  res.json(blacklist)
})

router.post('/', auth.authenticate(process.env['DIARIOBOT_AUTH_GROUP_ADMIN']), async (req, res) => {
  var palavra = req.body.palavra

  var existingPalavra = await dbi.blacklisted.findOne({ where: { palavra }, raw: true })
  if (existingPalavra)
    throw new AppError(`Palavra already blacklisted: ${palavra}`)

  var persistedPalavra = await dbi.blacklisted.create({ palavra })
  res.json(persistedPalavra.get({ plain: true }))
})

router.delete('/', auth.authenticate(process.env['DIARIOBOT_AUTH_GROUP_ADMIN']), async (req, res) => {
  var palavra = req.body.palavra

  var existingPalavra = await dbi.blacklisted.findOne({ where: { palavra }, raw: true })
  if (!existingPalavra)
    throw new AppError(`Palavra not found in the blacklist: ${palavra}`)

  await dbi.blacklisted.destroy({ where: { palavra } })
  res.send()
})

module.exports = router

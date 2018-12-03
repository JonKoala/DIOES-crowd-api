const router = require('express').Router()

const auth = require('../auth')
const dbi = require('../dbi')


router.post('/', auth.authenticate(process.env['DIARIOBOT_AUTH_GROUP_ADMIN']), async (req, res) => {
  var publicacao = req.body.publicacao
  var classe = req.body.classe

  await dbi.classificacao.destroy({ where: { id: publicacao } })
  if (classe) {
    var persistedClassificacao = await dbi.classificacao.create({ id: publicacao, classe_id: classe })
    res.json(persistedClassificacao.get({ plain: true }))
  } else {
    res.send()
  }
})

module.exports = router

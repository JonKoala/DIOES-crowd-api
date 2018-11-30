require('express-async-errors')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/blacklist', require('./routes/blacklist'))
app.use('/classes', require('./routes/classes'))
app.use('/classificacoes', require('./routes/classificacoes'))
app.use('/macrorregioes', require('./routes/macrorregioes'))
app.use('/predicoes', require('./routes/predicoes'))
app.use('/publicacoes', require('./routes/publicacoes'))
app.use('/usuarios', require('./routes/usuarios'))

app.use(require('./error/ErrorHandler'))

app.listen(process.env['DIARIOBOT_API_PORT'], () => console.log(`Server up and running! Listening on ${process.env['DIARIOBOT_API_PORT']}...`))

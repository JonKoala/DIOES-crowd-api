var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var appconfig = require('./appconfig')

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/publicacoes', require('./routes/publicacoes'));
app.use('/classes', require('./routes/classes'));
app.use('/classificacoes', require('./routes/classificacoes'));
app.use('/predicoes', require('./routes/predicoes'));

var port = appconfig['server']['port'];
app.listen(port, function() {
  console.log('Server up and running! Listening on ' + port + '...');
});

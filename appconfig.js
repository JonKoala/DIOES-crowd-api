var fs = require('fs')
var yaml = require('js-yaml')

var appconfig = yaml.load(fs.readFileSync('appconfig.yml'))

module.exports = appconfig;

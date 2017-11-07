var fs = require('fs')
var yaml = require('js-yaml')

var appconfig = yaml.load(fs.readFileSync('appconfig.yaml'))

module.exports = appconfig;

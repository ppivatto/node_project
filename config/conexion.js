const argv = require('yargs').argv;
let mongoose = require('mongoose');

const mongoConection = 'mongodb://pepito:test123@ds235239.mlab.com:35239/example-2018'

console.log('MONGO CONNECTION>>', argv.environment)

mongoose.connect(mongoConection); 
//mongodb://localhost:27017/crud
// 'mongodb://pepi:test123@port.mlab.com:15446/personas'

module.exports = mongoose;
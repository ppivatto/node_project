let mongoose = require('mongoose');

mongoose.connect('mongodb://pepito:test123@ds235239.mlab.com:35239/example-2018'); 
//mongodb://localhost:27017/crud
// 'mongodb://pepi:test123@port.mlab.com:15446/personas'

module.exports = mongoose;
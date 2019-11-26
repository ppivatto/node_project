require('dotenv').config();
const argv = require('yargs').argv;
let mongoose = require('mongoose');

const environment = argv.environment;
const db_environment = `${environment.toUpperCase()}`;
//export const BASE_URL = process.env[`REACT_APP_${envKey}_API_URL`];
const mongoConection = process.env[`${db_environment}_DB_MONGO`]

console.log('db_environment CONNECTION>>', db_environment)
console.log('MONGO CONNECTION>>', mongoConection)

mongoose.connect(mongoConection); 
//mongodb://localhost:27017/crud
// 'mongodb://pepi:test123@port.mlab.com:15446/personas'

module.exports = mongoose;
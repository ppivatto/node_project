require('dotenv').config();
const argv = require('yargs').argv;
let mongoose = require('mongoose');

const environment = argv.environment;
const db_environment = `${environment.toUpperCase()}`;
const mongoConection = process.env[`${db_environment}_DB_MONGO`]

console.log('MONGO CONNECTION>>', mongoConection)

mongoose.connect(mongoConection, {useNewUrlParser: true, useUnifiedTopology: true}); 

module.exports = mongoose;
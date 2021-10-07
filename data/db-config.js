const knex = require("knex");
const configuration = require("../knexfile.js");

const enviroment = process.env.NODE_ENV;

module.exports = knex(configuration[enviroment]);

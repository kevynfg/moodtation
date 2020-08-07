//Busca o knexfile com os dados para conectar com o banco e adiciona para o const knex
const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile.development);

module.exports = knex;
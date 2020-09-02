const express = require('express');
const routes = require('./routes'); //importar o routes do routes.js

const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes); //serve para quando quer colocar algum tipo de configuração que está em outro arquivo, ou colocar algum módulo

server.listen(3333, () => {
  console.log('Server rodando...');
});

const express = require('express');

const usersController = require('./controllers/usersController');
const consistenciaController = require('./controllers/consistenciaController');
const sessionsController = require('./controllers/SessionController');
const profileController = require('./controllers/profileController');
const routes = express.Router();

//controla fazendo requisição de algum ID e retorna os dados que necessitar
routes.post('/sessions', sessionsController.create);

//controle de criação e listar usuários
routes.get('/users', usersController.server);
routes.post('/users', usersController.create);

//profile é para saber qual ID está logado
routes.get('/profile', profileController.server);

//registra dados em geral do perfil do usuário
routes.post('/consistencia', consistenciaController.create);
routes.get('/consistencia', consistenciaController.server);
routes.delete('/consistencia/:id', consistenciaController.delete);

//exporta todos os routes
module.exports = routes;

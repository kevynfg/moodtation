const express = require('express');

const usersController = require('./controllers/usersController');
const consistenciaController = require('./controllers/consistenciaController');

const routes = express.Router();

routes.get('/users' , usersController.server); 
routes.post('/users' , usersController.create);

routes.post('/consistencia', consistenciaController.create);
routes.get('/consistencia', consistenciaController.server);

module.exports = routes;
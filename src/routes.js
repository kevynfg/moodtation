const express = require('express');
const usersController = require('./controllers/usersController');

const routes = express.Router();

routes.get('/users' , usersController.server); 
routes.post('/users', usersController.create);

module.exports = routes;
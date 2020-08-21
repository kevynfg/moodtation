const express = require('express');

const routes = express.Router();
const usersController = require('./controllers/usersController');

routes.get('/users', usersController.index);

module.exports = routes;
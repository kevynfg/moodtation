const express = require('express')

const routes = express.Router()
const usersController = require('./controllers/UserController')
const progressoController = require('./controllers/progressoController')


routes
    //rotas do usuário
    .get('/users', usersController.index)
    .post('/users', usersController.create)
    .put('/users/:id', usersController.update)
    .delete('/users/:id', usersController.delete)
    //progresso do usuário
    .get('/progresso', progressoController.index)
    .post('/progresso', progressoController.create)
    .delete('/progresso/:id', usersController.delete)



module.exports = routes
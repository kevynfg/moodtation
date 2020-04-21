const express = require('express');
const connection = require('./database/connection');
const routes = express.Router();

routes.get('/', (require, response) => {
    return response.json({message: `Olá ${require.query.name}` });
   });

   routes.post ('/users', (require, response) => { //post é para criar algo na aplicação
     
    const users = await connection('users').select ('*');

    return response.json (users);


   }); 
   module.exports = routes;
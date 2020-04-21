const express = require('express');

const routes = express.Router();

routes.get('/', (require, response) => {
    return response.json({message: `Olá ${require.query.name}` });
   });

   routes.post ('/users', (require, response) => { //post é para criar algo na aplicação
     
    console.log(require.body);

    return response.json ({ ok: true });


   }); 
   module.exports = routes;
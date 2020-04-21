const express = require('express');

const server = express();

server.get('/', (require, response) => {
 return response.json({message: `Olá ${require.query.name}` });
});

server.listen(3333);
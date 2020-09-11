const express = require('express');
const routes = require('./routes'); //importar o routes do routes.js
const auth = require('./auth');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(
  cors({
    origin: 'http://localhost:3333',
    credentials: true,
  })
);

//esta linha faz com que o server passe a usar requests em json
server.use(express.json());
server.use(routes);
server.use('/auth', auth);

//rota de error para rotas que não são achadas
server.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

//capturar os erros do server, um middleware
//next é o próximo passo da requisição
server.use((error, req, res, next) => {
  //verifica o erro, código de erro do HTTP é entre 500-599
  res.status(error.status || 500);
  res.json({ error: error.message });
});

server.listen(3333, () => console.log('Servidor rodando...'));

const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const UserBanco = require('../controllers/UserController');

//Os caminhos das rotas estão ligadas ao auth
router.get('/', (req, res) => {
  res.json({
    message: 'Locked',
  });
});

function validarUsuario(user) {
  const validEmail = typeof user.email == 'string' && user.email.trim() != '';
  const validPassword =
    typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;

  return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
  //verifica se foi passado um email e se é string
  if (validarUsuario(req.body)) {
    //verifica se o email existe no banco de dados
    //através da query pegarEmail que verifica o banco de dados
    UserBanco.pegarEmail(req.body.email).then((user) => {
      //traz o usuário que existe no console
      console.log('UserBanco', user);
      //se não tiver usuário
      if (!user) {
        bcrypt.hash(req.body.password, 10).then((hash) => {
          const user = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
            created_at: new Date(), //atualizar a data de criação
          };
          //usa a function do arquivo UsersController para
          //criar um usuário e pegar o id, pegar o ID e mandar de volta em json
          UserBanco.create(user).then((id) => {
            res.json({
              id,
              message: 'Pode usar',
            });
          });
        });
        //se tiver email já cadastrado
      } else {
        next(new Error('E-mail sendo usado!'));
      }
    });
  } else {
    next(error);
  }
});

router.post('/login', (req, res, next) => {
  if (validarUsuario(req.body)) {
    //verificar se tem no banco de dados
    UserBanco.pegarEmail(req.body.email).then((user) => {
      console.log('user', user);
      if (user) {
        //compara a senha do body com a senha encriptada no banco
        bcrypt.compare(req.body.password, user.password).then((result) => {
          //se a senha for correta
          if (result) {
            //mandar o 'set-cookie' header
            //manda o id do usuario como 'user_id'
            //const isSecure = req.app.get('env') != 'development';
            res.cookie('user_id', user.id, {
              httpOnly: true,
              //secure: isSecure,
              //signed: true,
            });
            res.json({
              result,
              message: 'Logado!',
            });
          }
        });
      } else {
        next(Error('Login inválido'));
      }
    });
  } else {
    next(Error('Login Inválido'));
  }
});

module.exports = router;

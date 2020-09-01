const express = require('express');
const router = express.Router();
const user = require('../controllers/UserController');

//Os caminhos das rotas estão ligadas ao auth
router.get('/', (req, res) => {
    res.json({
        message: 'Locked'
    })
})

function validarUsuario(user) {
    const validEmail = typeof user.email == 'string' &&
                        user.email.trim() != '';
    const validPassword = typeof user.password == 'string' &&
                        user.password.trim() != '' &&
                        user.password.trim().length >= 6;

    return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
    //verifica se foi passado um email e se é string
    if(validarUsuario(req.body)) {
        //verifica se o email existe no banco de dados
        //através da query pegarEmail que verifica o banco de dados
        user.pegarEmail(req.body.email)
        .then(user => {
            //traz o usuário que existe no console
            console.log('user', user)
            //se não tiver usuário
            if(!user) {
                res.json({
                    user,
                    message: 'Pode usar'
                })
            //se tiver email já cadastrado
            } else {
                next(new Error('E-mail sendo usado!'))
            }
        })  
    } else {
        next(error)
    }
})

module.exports = router;
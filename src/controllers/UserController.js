const knex = require("../database")
// const update = require("lodash.update");

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('users')
            .where('deleted_at', null)

            return res.json(results);
        } catch (error) {
            next(error)
        }
        
    },
    //como terceiro parâmetro coloco o next que lida com o erro de request
    //vindo do server.js
    async create(req, res, next) {
        
        try {
            const {username} = req.body;

            await knex('users').insert({
                username
            })

            return res.status(201).send()

        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            //pega dados do corpo em json
            const { username } = req.body
            //pegar id do parâmetro /users/:id
            const { id } = req.params

            await knex('users').update({ username }).where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('users')
            .where({ id })
            .update('deleted_at', new Date())
            

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    pegarEmail: function (email) {
        return knex('users').where('email', email).first();
    }
}
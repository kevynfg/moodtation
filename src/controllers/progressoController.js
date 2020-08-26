const knex = require("../database");
const update = require("lodash.update");
// const update = require("lodash.update");

module.exports = {
    async index(req, res, next) {
        try {
            //page é para não listar TODOS os dados
            const { user_id, page = 1 } = req.query;

            //Armazena a quantidade de dados numa variável
            const countObject = knex('progresso').count()

            const query = knex('progresso')
            .limit(5)
            //o offset é o deslocamento de páginas, page - 1 é igual a 0,
            //vezes 5 é 0, de inicio ele vai trazer do registro 0 ao 5
            //e assim por diante em cada paginação, pagina 1 até 5 registros
            //pagina 2 de 6 a 11 registros
            .offset((page - 1) * 5)

            if(user_id) {
                query
                .where({ user_id })
                .join('users', 'users.id', '=', 'progresso.user_id')
                .select('progresso.*', 'users.username')
                .where('users.deleted_at', null)

                //busca os dados do id de usuário especificado e retorna um array
                countObject.where({ user_id })
            }

            //desestruturando o count, pegando de dentro do objeto que retornou em um array
            const [count] = await countObject
            console.log(count)

            //armazena a query
            const results = await query

            //exibe no header do insomnia o count de progresso
            res.header('X-Total-Count', count["count"])
            
            //finaliza
            return res.json(results);

        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            const { tempo_meditacao, user_id } = req.body

            await knex('progresso').insert({
                tempo_meditacao,
                user_id
            })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { user_id } = req.params

            await knex('progresso')
            .where({ user_id })
            .join('users', 'users.id', '=', 'progresso.user_id')
            .select('progresso.*', 'users.username')
            .where('users.deleted_at', null)
            
        } catch (error) {
            next(error)
        }
    }
}
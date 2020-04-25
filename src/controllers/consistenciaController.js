const connection = require('../database/connection');

module.exports = {
    //linha abaixo é o get
    async server(request, response) {
        //na linha abaixo posso dar um select específico ou um select em tudo igual abaixo
        const consistencia = await connection('consistencia').select('*');

        return response.json(consistencia);
    },

    //linha abaixo é o get
    async create(request, response) {
        const {dia_semana, dia_anterior, dias, description, cerebro, coracao, meditacao, value} = request.body;
        //no id_usuario é onde sei qual usuário está logado com o id específico
        //no insomnia é colocado o id_usuario em Headers para dar autorização e testar qual usuário está logado
        //usa o id do cabeçalho para autorizar
        const id_usuario = request.headers.authorization;

        //aqui se faz o insert no usuário especificado em id
        //porém o mesmo usuário pode ter 2 inserts repetidos
        //o id em vetor é a única forma de passar para response
        //aqui ele serve para mostrar o id criado no insert que está sendo feito
        const [id] = await connection('consistencia').insert({
            dia_semana,
            dia_anterior,
            dias,
            description,
            cerebro,
            coracao,
            meditacao,
            value,
            id_usuario
        });
        //a response só pode ser um objeto ou um vetor []
        return response.json({ id });
    }
};
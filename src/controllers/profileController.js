const connection = require('../database/connection');

module.exports = {
    async server(request, response) {
        //faz requisição do ID no cabeçalho
        const id_usuario = request.headers.authorization;

        //usa o ID para verificar quantos quais e quantos dados o usuário tem
        const consistencia = await connection('consistencia').where('id_usuario', id_usuario).select('*');
        return response.json(consistencia);
    }
}
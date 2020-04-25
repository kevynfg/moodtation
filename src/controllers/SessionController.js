const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        //Pega o ID do usuário e coloca em um vetor
        const { id } = request.body;

        //busca id do banco e passa o id do request body e seleciona o nome deste ID especificado
        //first() é para priorizar este select em first
        const usuario = await connection('users')
        .where('id', id)
        .select('name')
        .first();

        //se o usuário não existe exibe o erro
        if (!usuario) {
            return response.status(400).json({ error: 'Usuário não encontrado com este ID'});
        }
        //se não, retorna o usuario existente
        return response.json(usuario);
    }
}
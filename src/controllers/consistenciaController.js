const connection = require('../database/connection');

module.exports = {
  //linha abaixo é o get
  async server(request, response) {
    const { page = 1 } = request.query;
    //na linha abaixo posso dar um select específico ou um select em tudo igual abaixo
    const consistencia = await connection('consistencia')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    return response.json(consistencia);
  },

  //linha abaixo é o get
  async create(request, response) {
    const {
      dia_semana,
      dia_anterior,
      dias,
      description,
      cerebro,
      coracao,
      meditacao,
      value,
    } = request.body;
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
      id_usuario,
    });
    //a response só pode ser um objeto ou um vetor []
    return response.json({ id });
  },

  //Deletar consistencia baseado no id do usuário e se o usuário está logado
  async delete(request, response) {
    //pegar o id passado em http://localhost:3333/consistencia/1
    const { id } = request.params;
    //usar o id de autorização no cabeçalho
    const id_usuario = request.headers.authorization;

    //selecionar o ID na tabela consistencia do usuário logado
    const consistencia = await connection('consistencia')
      .where('id', id)
      .select('id_usuario')
      .first();

    console.log(consistencia);

    //se o id da tabela consistencia não for igual o usuário logado
    if (consistencia.id_usuario !== id_usuario) {
      return response.status(401).json({ error: 'Operação não permitida' });
    }
    //se sim, deletar a consistência no id passado http://localhost:3333/consistencia/1 = ID 1
    await connection('consistencia').where('id', id).delete();

    //resposta http pro body
    return response.status(204).send();
  },
};

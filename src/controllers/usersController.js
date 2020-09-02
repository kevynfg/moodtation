const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async server(request, response) {
    const users = await connection('users').select('*');

    return response.json(users);
  },

  async create(request, response) {
    const { name, email, senha, city, uf } = request.body;

    //crypto é uma chave de acesso, o número 4 é o quão forte e aleatório é gerado esse código
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('users').insert({
      id,
      name,
      email,
      senha,
      city,
      uf,
    });

    return response.json({ id, name, email });
  },
};

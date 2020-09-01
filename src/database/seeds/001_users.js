
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'kevyn gonçalves',
          password: '452366',
          email: 'kevynfariaga@gmail.com' },
        { name: 'maryana sales',
          password: 'm@ry',
          email: 'maryanasales@live.com' },
      ]);
    });
};

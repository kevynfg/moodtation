
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('progresso').del()
    .then(function () {
      // Inserts seed entries
      return knex('progresso').insert([
        { user_id: 5,
          tempo_meditacao: "Você fez 120 horas de meditação" }
      ]);
    });
};

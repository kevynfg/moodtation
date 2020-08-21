exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('progresso').del()
    .then(function () {
      // Inserts seed entries
      return knex('progresso').insert([
        { user_id: 15,
          tempo_meditacao: "Você fez 10 horas de meditação" }
      ]);
    });
};

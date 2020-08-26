exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('progresso').del()
    .then(function () {
      // Inserts seed entries
      return knex('progresso').insert([
        { user_id: 1,
          tempo_meditacao: "1220" }
      ]);
    });
};

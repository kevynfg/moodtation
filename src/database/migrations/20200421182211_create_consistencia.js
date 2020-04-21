
exports.up = function(knex) {
  return knex.schema.createTable('consistencia', function (table) {
      table.increments();
      table.string('dia_semana').notNullable();
      table.string('dia_anterior').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      table.string('id_usuario').notNullable();
      table.foreign('id_usuario').references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('consistencia');
};

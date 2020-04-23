
exports.up = function(knex) {
  return knex.schema.createTable('consistencia', function (table) {
      table.increments();
      table.date('dia_semana').notNullable();
      table.date('dia_anterior').notNullable();
      table.decimal('dias').notNullable();
      table.string('description').notNullable();
      table.string('cerebro').notNullable();
      table.string('coracao').notNullable();
      table.string('meditacao').notNullable();
      table.decimal('value').notNullable();
      table.string('id_usuario').notNullable();
      table.foreign('id_usuario').references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('consistencia');
};

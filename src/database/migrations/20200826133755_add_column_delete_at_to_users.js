
//ação de update no soft delete, onde o usuário não é literalmente deletado do banco
exports.up = knex => knex.schema.alterTable('users', table => {
    //mostra a data de atualização de quando o usuário foi deletado
    table.timestamp('deleted_at')
  });

//é ação de rollback
exports.down = knex => knex.schema.alterTable('users', table => {
    //mostra a data de atualização de quando o usuário foi deletado
    table.dropColumn('deleted_at')
  });
